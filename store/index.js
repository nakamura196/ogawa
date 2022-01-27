export const state = () => ({
  wordAttributes: {},
  entityAttributes: {},
  selectedFactoidIdOnText: '',
  selectedEntityIdOnText: '',
})

export const mutations = {
  setWordAttributes(state, data) {
    state.wordAttributes = data
  },
  setEntityAttributes(state, data) {
    state.entityAttributes = data
  },
  setSelectedFactoidIdOnText(state, data) {
    state.selectedFactoidIdOnText = data
  },
  setSelectedEntityIdOnText(state, data) {
    state.selectedEntityIdOnText = data
  },
}

export const getters = {
  getWordAttributes(state) {
    return state.wordAttributes
  },
  getEntityAttributes(state) {
    return state.entityAttributes
  },
  getSelectedFactoidIdOnText(state) {
    return state.selectedFactoidIdOnText
  },
  getSelectedEntityIdOnText(state) {
    return state.selectedEntityIdOnText
  },
}
