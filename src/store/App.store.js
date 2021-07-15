export default {
  namespaced: true,

  state: {
    navOffsetY: 0,
  },

  actions: {},

  mutations: {
    SET_NAV_OFFSET_Y(state, payload) {
      state.navOffsetY = payload;
    },
  },

  getters: {
    GET_NAV_OFFSET_Y(state) {
      return state.navOffsetY;
    },
  },
};
