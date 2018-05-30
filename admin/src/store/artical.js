export default {
  namespaced: true,
  state: {
    currentArtical: {
      id: '',
      title: '',
      tags: null,
      content: '',
      isPublish: ''
    }
  },
  mutations: {
    updateCurrentArtical (state, obj) {
      state.currentArtical = Object.assign(state.currentArtical, obj)
    }
  }
}
