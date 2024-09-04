import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const darkModeState = localStorage.getItem("darkMode");
const stateValue: boolean = darkModeState == "true";

export default new Vuex.Store({
  state: {
    isDarkMode: stateValue,
    isMenuOpen: true,
  },
  mutations: {
    TOGGLE_MODE(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode.toString());
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
