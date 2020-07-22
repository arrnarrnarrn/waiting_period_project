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
  async fetchPickupItems({ commit }) {
    await axios
      .get('https://waiting-nuxt-book.herokuapp.com/api/pickup')
      .then((response) => {
        commit('setPickupItems', { pickupItems: response.data })
      })
  },
}
