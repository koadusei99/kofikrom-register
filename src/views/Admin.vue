<template>
  <div class="admin-panel">
    <h2 class="heading">ADMIN</h2>
    <div class="card info">
      <div>
        <p class="heading2">Conference Name</p>
        <p class="txt">{{ conference.name }}</p>
      </div>
      <div>
        <p class="heading2">Conference Slug</p>
        <p class="txt">{{ conference.slug }}</p>
      </div>
    </div>
    <form action="" class="card form">
      <div class="input-group pass">
        <label for="password">Password</label>
        <input type="password" v-model="password" @input="authn" />
      </div>
      <div v-if="auth" class="snik">
        <div class="input-group">
          <label for="">Conference Name</label>
          <input type="text" v-model="newConf.name" :disabled="!auth" />
        </div>
        <div class="input-group">
          <label for="">Conference Slug</label>
          <input type="text" v-model="slug" :disabled="!auth" />
        </div>
        <button @click.prevent="setConferenceSlug" :disabled="!auth">
          Initialize
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Admin",
  props: { statsSheet: Object },
  data() {
    return {
      newConf: { name: "", slug: "", date: "" },
      submitting: false,
      password: "",
      auth: false,
    };
  },
  computed: {
    slug: {
      get() {
        return this.newConf.slug.toUpperCase();
      },
      set(value) {
        this.newConf.slug = value;
      },
    },
    disabled() {
      return this.auth ? "disabled" : "";
    },
    ...mapGetters(["conference"]),
  },
  methods: {
    submit() {},
    async setConferenceSlug() {
      this.newConf.date = new Date().toDateString();
      // set slug on sheet
      const c2 = this.statsSheet.getCellByA1("B2");
      c2.value = this.newConf.slug;
      if (this.auth) {
        this.submitConference(this.newConf);
        await this.statsSheet.saveUpdatedCells();
      }
      this.newConf = { name: "", slug: "", date: "" };
    },
    ...mapActions(["submitConference"]),
    authn() {
      const e9 = this.statsSheet.getCellByA1("E9");
      if (this.password === e9.value) {
        this.auth = true;
      } else {
        this.auth = false;
      }
    },
  },
};
</script>

<style scoped>
.heading {
  font-size: clamp(40px, 3vw, 48px);
  font-weight: 700;
}
.admin-panel {
  padding: var(--y-padding) var(--x-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  font-family: Inter;
}
.heading2 {
  font-size: clamp(28px, 2.2vw, 40px);
  font-weight: 600;
  font-family: Inter;
  margin-bottom: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.txt {
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 500;
}
.card {
  border: 1px solid #e2e2e2af;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 30px;
  width: min(70%, 800px);
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 100px;
  align-items: center;
}
.pass {
  margin-bottom: 30px;
}
.snik {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 350px;
  width: 100%;
}
.input-group label {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: Inter;
}
.input-group input {
  width: 100%;
  font-size: 1.5rem;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.form button {
  width: 150px;
  padding: 10px 20px;
  text-transform: capitalize;
  border: none;
  background-color: var(--primary);
  height: 50px;
  color: white;
  font-size: 1.1rem;
  font-family: Roboto;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>
