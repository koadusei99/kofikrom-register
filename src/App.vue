<template>
  <div id="app">
    <router-view v-if="!loading" :entriesSheet="sheet1" :statsSheet="sheet2" />
  </div>
</template>

<script>
import "@/global.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
export default {
  created() {
    this.authenticate();
  },
  data() {
    return { loading: true, sheet1: {}, sheet2: {} };
  },
  methods: {
    async authenticate() {
      const creds = require("../cred.json");
      const doc = new GoogleSpreadsheet(process.env.VUE_APP_SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      console.log(doc.title);
      this.sheet1 = doc.sheetsByIndex[0];
      this.sheet2 = doc.sheetsByIndex[1];
      await this.sheet2.loadCells("A2:H30");
      this.loading = false;
    },
  },
};
</script>

<style></style>
