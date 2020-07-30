import axios from 'axios'

export const state = () => ({
  pickupProgrammings: {},
})

export const getters = {
  pickupProgrammings: (state) => state.pickupProgrammings,
}

export const mutations = {
  setPickupProgrammings(state, { pickupProgrammings }) {
    state.pickupProgrammings = pickupProgrammings
  },
}

export const actions = {
  async fetchPickupProgrammings({ commit, error }) {
    try {
      await axios
        .get(process.env.baseUrl + '/api/pickup/programming')
        .then((response) => {
          commit('setPickupProgrammings', { pickupProgrammings: response.data })
        })
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
}
