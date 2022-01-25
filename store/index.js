export const state = () => ({
  wordAttributes: {},
  selectedFactoidIdOnText: '',
})

export const mutations = {
  setWordAttributes(state, data) {
    state.wordAttributes = data
  },
  setSelectedFactoidIdOnText(state, data) {
    state.selectedFactoidIdOnText = data
  },
}

export const getters = {
  getWordAttributes(state) {
    return state.wordAttributes
  },
  getSelectedFactoidIdOnText(state) {
    return state.selectedFactoidIdOnText
  },
}
