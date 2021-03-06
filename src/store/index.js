import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      Country: "Ghana",
    },
    regions: [
      "AHAFO",
      "ASHANTI",
      "BONO EAST",
      "BRONG AHAFO",
      "CENTRAL",
      "EASTERN",
      "GREATER ACCRA",
      "NORTH EAST",
      "NORTHERN",
      "OTI",
      "SAVANNAH",
      "UPPER EAST",
      "UPPER WEST",
      "WESTERN",
      "WESTERN NORTH",
      "VOLTA",
    ],
    // regionsShort: [
    //   "AH",
    //   "AS",
    //   "BE",
    //   "BA",
    //   "CE",
    //   "EA",
    //   "GA",
    //   "NE",
    //   "NO",
    //   "OT",
    //   "SA",
    //   "UE",
    //   "UW",
    //   "WE",
    //   "WN",
    //   "VO",
    // ],
    professions: [
      "Doctor",
      "Pharmacist",
      "Software & IT",
      "Administration",
      "Marketing",
      "Other",
    ],
    titles: ["Mr.", "Mrs", "Dr.", "Prof.", "Pharm"],
    conference: { name: "CONF00", date: new Date(), slug: "CONF00" },
  },
  getters: {
    regions(state) {
      return state.regions;
    },
    titles(state) {
      return state.titles;
    },
    professions(state) {
      return state.professions;
    },
    conference(state) {
      return state.conference;
    },
    submission(state) {
      return state.formData;
    },
  },
  mutations: {
    SET_CONFERENCE(state, payload) {
      state.conference = payload;
    },
    SET_DATA(state, payload) {
      state.formData = payload;
    },
  },
  actions: {
    submitConference({ commit }, payload) {
      commit("SET_CONFERENCE", payload);
    },

    submitFormData({ commit }, payload) {
      commit("SET_DATA", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
