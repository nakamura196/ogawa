export const state = () => ({
  wordAttributes: {},
})

export const mutations = {
  setWordAttributes(state, data) {
    state.wordAttributes = data
  },
}

export const getters = {
  getWordAttributes(state) {
    return state.wordAttributes
  },
}
