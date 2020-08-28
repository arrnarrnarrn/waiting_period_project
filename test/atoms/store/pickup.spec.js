import Vuex from 'vuex'
import * as pickup from '@/store/api/pickup'
import { createLocalVue } from '@vue/test-utils'
import axios from 'axios'

const localVue = createLocalVue()
localVue.use(Vuex)

let mockAxiosGetResult
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
}))

let action
const testedAction = (context = {}, payload = {}) => {
  return pickup.actions[action].bind({ $axios: axios })(context, payload)
}

describe('store/api.pickup.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(pickup)
  })
  describe('getters', () => {
    test('何もしていないときは空', () => {
      expect(store.getters['pickupItems']).toStrictEqual({})
    })
  })
  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })
    test('getPickupData', async (done) => {
      action = 'fetchPickupItems'
      await testedAction({ commit })
      expect(store.getters['pickupItems']).toStrictEqual({})
      done()
    })
  })
})
