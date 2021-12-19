import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
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
  },
  mutations: {},
  actions: {},
  modules: {},
});
