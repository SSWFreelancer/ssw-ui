import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDarkMode: false,
    isMenuOpen: true,
  },
  mutations: {
    TOGGLE_MODE(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    TOGGLE_MENU(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  actions: {
    toggleMode({ commit }) {
      commit("TOGGLE_MODE");
    },
    toggleMenu({ commit }) {
      commit("TOGGLE_MENU");
    },
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
    isMenuOpen: (state) => state.isMenuOpen,
  },
});
