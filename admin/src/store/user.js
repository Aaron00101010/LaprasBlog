export default {
  namespaced: true,
  state: {
    isLogin: false
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    }
  }
}
