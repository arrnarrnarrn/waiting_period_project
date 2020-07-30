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
  async fetchPickupDesigns({ commit, error }) {
    try {
      await axios
        .get(process.env.baseUrl + '/api/pickup/design')
        .then((response) => {
          commit('setPickupDesigns', { pickupDesigns: response.data })
        })
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
}
