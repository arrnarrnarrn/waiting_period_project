import axios from 'axios'

export const state = () => ({
  pickupComics: {},
})

export const getters = {
  pickupComics: (state) => state.pickupComics,
}

export const mutations = {
  setPickupComics(state, { pickupComics }) {
    state.pickupComics = pickupComics
  },
}

export const actions = {
  async fetchPickupComics({ commit, error }) {
    try {
      await axios
        .get(process.env.baseUrl + '/api/pickup/comic')
        .then((response) => {
          commit('setPickupComics', { pickupComics: response.data })
        })
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
}
