<template>
  <div id="app">
    <router-view v-if="!loading" :entriesSheet="sheet1" :statsSheet="sheet2" :adminSheet="sheet3" />
    <div class="bottom-nav">
      <Navi />
    </div>
  </div>
</template>

<script>
import "@/global.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Navi from "./components/Navi.vue";
export default {
  components: { Navi },
  created() {
    this.authenticate();
  },
  data() {
    return { loading: true, sheet1: {}, sheet2: {}, sheet3: {} };
  },
  methods: {
    async authenticate() {
      const creds = require("../cred.json");
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      this.sheet1 = doc.sheetsByIndex[0];
      this.sheet2 = doc.sheetsByIndex[1];
      this.sheet3 = doc.sheetsByIndex[2];
      await this.sheet2.loadCells("A2:H30");
      await this.sheet3.loadCells("A1:C1");
      this.loading = false;
    },
  },
};
</script>

<style>
#app {
  position: relative;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
