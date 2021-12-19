<template>
  <div class="admin-panel">
    <div class="info">
      <p>Conference Name</p>
      <p></p>
      <p>Conference Slug</p>
      <p></p>
    </div>
    <form action="">
      <div class="input-group">
        <label for="">Conference Name</label>
        <input type="text" v-model="conference.name" />
      </div>
      <div class="input-group">
        <label for="">Conference Slug</label>
        <input type="text" v-model="slug" />
      </div>
      <button @click.prevent="setConferenceSlug">Initialize</button>
    </form>
  </div>
</template>

<script>
export default {
  props: { sheet: Object },
  data() {
    return { conference: { name: "", slug: "", date: "" } };
  },
  computed: {
    slug: {
      get() {
        return this.conference.slug.toUpperCase();
      },
      set(value) {
        this.conference.slug = value;
      },
    },
  },
  methods: {
    submit() {},
    async setConferenceSlug() {
      await this.sheet.loadCells("B2:B2");
      const cell = this.sheet.getCellByA1("B2");
      console.log(cell);
    },
  },
};
</script>

<style></style>
