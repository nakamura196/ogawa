export const state = () => ({
  wordAttributes: {},
  entityAttributes: {},
  selectedFactoidIdOnText: '',
  selectedEntityIdOnText: '',
  selectedReferenceIdOnText: '',
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
  setSelectedReferenceIdOnText(state, data) {
    state.selectedReferenceIdOnText = data
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
  getSelectedReferenceIdOnText(state) {
    return state.selectedReferenceIdOnText
  },
}
