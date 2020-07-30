import axios from 'axios'

export const state = () => ({
  pickupItems: {},
})

export const getters = {
  pickupItems: (state) => state.pickupItems,
}

export const mutations = {
  setPickupItems(state, { pickupItems }) {
    state.pickupItems = pickupItems
  },
}

export const actions = {
  async fetchPickupItems({ commit, error }) {
    try {
      await axios.get(process.env.baseUrl + '/api/pickup').then((response) => {
        commit('setPickupItems', { pickupItems: response.data })
      })
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
}
