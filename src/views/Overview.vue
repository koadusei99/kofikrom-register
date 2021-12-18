<template>
  <div class="home">
    <p>{{ sheet.rowCount }}</p>
    <p>{{ sheet.title }}</p>
    <button @click="addRow">ADD</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  props: {
    sheet: Object,
  },
  data() {
    return {};
  },
  methods: {
    async addRow() {
      const larryRow = await this.sheet.addRow({
        FirstName: "Larry Page",
        Email: "larry@google.com",
      });
      console.log(larryRow);
    },
  },
};
</script>
