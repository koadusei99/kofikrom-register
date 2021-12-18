import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    regionsShort: [
      "AH",
      "AS",
      "BE",
      "BA",
      "CE",
      "EA",
      "GA",
      "NE",
      "NO",
      "OT",
      "SA",
      "UE",
      "UW",
      "WE",
      "WN",
      "VO",
    ],
    conference: { name: "Conference", date: new Date(), slug: "CONF" },
  },
  getters: {
    regions(state) {
      return state.regions;
    },
    regionsShort(state) {
      return state.regionsShort;
    },
    conference(state) {
      return state.conference;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
