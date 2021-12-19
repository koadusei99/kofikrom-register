<template>
  <div class="admin-panel">
    <div class="info">
      <p>Conference Name</p>
      <p>{{ conference.name }}</p>
      <p>Conference Slug</p>
      <p>{{ conference.slug }}</p>
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
import { mapGetters } from "vuex";
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
    ...mapGetters(["conference"]),
  },
  methods: {
    submit() {},
    async setConferenceSlug() {
      console.log(this.conference);
    },
  },
};
</script>

<style></style>
