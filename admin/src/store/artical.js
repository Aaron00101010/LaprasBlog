export default {
  namespaced: true,
  state: {
    currentArtical: {
      id: '',
      title: '',
      tags: '',
      content: '',
      isPublish: ''
    },
    refreshArticalListFlag: false,
    lastArticalID: void 0
  },
  mutations: {
    updateCurrentArtical (state, obj) {
      state.currentArtical = Object.assign(state.currentArtical, obj)
    },
    updateArticalList (state) {
      state.refreshArticalListFlag = true
    },
    resetRefreshArticalListFlag (state) {
      state.refreshArticalListFlag = false
    },
    setLastArticalID (state, id) {
      state.lastArticalID = id
    }
  }
}
