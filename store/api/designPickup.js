import axios from 'axios'

export const state = () => ({
  pickupDesigns: {},
})

export const getters = {
  pickupDesigns: (state) => state.pickupDesigns,
}

export const mutations = {
  setPickupDesigns(state, { pickupDesigns }) {
    state.pickupDesigns = pickupDesigns
  },
}

export const actions = {
  async fetchPickupDesigns({ commit }) {
    await axios
      .get(process.env.baseUrl + '/api/pickup/design')
      .then((response) => {
        commit('setPickupDesigns', { pickupDesigns: response.data })
      })
  },
}
