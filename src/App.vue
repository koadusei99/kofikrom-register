<template>
  <div id="app">
    <router-view :sheet="sheet" />
  </div>
</template>

<script>
import "@/global.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
export default {
  mounted() {
    this.authenticate();
  },
  data() {
    return { sheet: {} };
  },
  methods: {
    async authenticate() {
      const creds = require("../cred.json");
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      console.log(doc);
      console.log(doc.title);
      this.sheet = doc.sheetsByIndex[0];
    },
  },
};
</script>

<style>
#app {
  /* padding: var(--y-padding) var(--x-padding); */
}
</style>
