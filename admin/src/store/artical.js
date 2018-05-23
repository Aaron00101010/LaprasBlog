export default {
  namespaced: true,
  state: {
    currentArtical: {}
  },
  mutations: {
    setCurrentArtical (state, obj) {
      state.currentArtical = obj
    }
  }
}
