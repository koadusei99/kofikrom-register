<template>
  <div class="container">
    <div class="form-page">
      <div class="header">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
        </div>

        <div class="header-text">
          <p id="main-p">KOFIKROM PHARMACY LTD.</p>
          <p id="sub-p">{{ conference.name }}/{{ conference.slug }}</p>
        </div>
      </div>

      <div class="body">
        <div class="form">
          <form action="">
            <div class="form-section">
              <label for="title">Title</label>
              <select
                class="title"
                name="title"
                id="title"
                v-model="formData.Title"
              >
                <option v-for="title in titles" :value="title" :key="title">
                  {{ title }}
                </option>
              </select>
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label for="fname">First Name</label>
                <input type="text" id="fname" v-model="formData.FirstName" />
              </div>

              <div class="form-section">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" v-model="formData.LastName" />
              </div>
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" v-model="formData.Phone" />
              </div>

              <div class="form-section">
                <label for="gender">Gender</label>
                <select name="gender" id="gender" v-model="formData.Gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div class="form-section">
              <label for="email">Email</label>
              <input
                class="longinput"
                type="email"
                id="email"
                v-model="formData.Email"
              />
            </div>

            <div class="form-section">
              <label for="org">Organization / Company / Institution</label>
              <input
                class="longinput"
                type="text"
                id="org"
                v-model="formData.Organization"
              />
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label for="profession">Profession</label>
                <select
                  name="Profession"
                  id="profession"
                  v-model="formData.Profession"
                >
                  <option value="">Select Profession</option>
                  <option v-for="p in professions" :value="p" :key="p">
                    {{ p }}
                  </option>
                </select>
              </div>

              <div class="form-section">
                <label for="spec">Specialization</label>
                <input
                  type="text"
                  id="spec"
                  v-model="formData.Specialization"
                />
              </div>
            </div>

            <div class="form-section">
              <label for="address">Address</label>
              <input
                class="longinput"
                type="text"
                id="address"
                v-model="formData.Address"
              />
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label for="region">Region</label>
                <select name="region" id="region" v-model="formData.Region">
                  <option value="">Select Region</option>
                  <option v-for="r in regions" :key="r" :value="r">
                    {{ r }}
                  </option>
                </select>
              </div>

              <div class="form-section">
                <label for="country">Country</label>
                <input disabled type="text" placeholder="Ghana" id="country" />
              </div>
            </div>
          </form>
        </div>

        <div class="sidebar">
          <div>
            <img src="../assets/icon-viewtoggle.svg" alt="toggle-view" />
          </div>

          <div>
            <router-link to="/overview"
              ><img src="../assets/icon-overview.svg" alt="overview"
            /></router-link>
          </div>

          <div @click="resetForm" class="reset">
            <img src="../assets/icon-refresh.svg" alt="refresh" />
          </div>
        </div>
      </div>

      <div class="form-btn">
        <button @click="submit">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Form",
  props: { entriesSheet: Object },
  mounted() {
    this.populate();
  },
  data() {
    return {
      formData: {
        Country: "Ghana",
      },
    };
  },
  computed: {
    ...mapGetters([
      "conference",
      "professions",
      "titles",
      "regions",
      "submission",
    ]),
  },
  methods: {
    ...mapActions(["submitFormData"]),
    populate() {
      this.formData = this.submission;
    },
    resetForm() {
      this.formData = {};
    },
    async submit() {
      this.formData.Conference = this.conference.name;
      this.formData.Slug = this.conference.slug;
      this.submitFormData(this.formData);
      this.$router.push({ name: "Preview" });
    },
  },
};
</script>

<style scoped>
.container {
  height: 1366px;
  background-image: url("../assets/form-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding: var(--y-padding) var(--x-padding);
  justify-content: space-around;
}

.form-page {
  height: 1184px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.header {
  width: 749px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 134px;
  height: 134px;
  background: #ffffff;
  border: 5px solid #0277bd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo img {
  width: 88px;
  height: 82px;
}

.header-text {
  margin-left: 59px;
}

.header-text #main-p {
  font-family: Inter;
  font-weight: bold;
  font-size: 36px;
  color: #0277bd;
  margin-bottom: 15px;
}

.header-text #sub-p {
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  color: #f97316;
  background: #ffffff;
  border-radius: 8px;
  padding: 5px 20px;
}

.body {
  width: 682px;
  height: 947px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  background-color: white;
  width: 682px;
  height: 947px;
  border: 1px solid #0277bd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px 0 0 8px;
  padding-top: 46px;
  padding-bottom: 47px;
  padding-left: 47.49px;
  padding-right: 46.48px;
  margin-top: 0px;
}

.form-section {
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-section-row {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 947px;
  background-color: #0277bd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 8px 8px 0px;
}

.form-btn {
  width: 252.59px;
  height: 65px;
}

.form-btn button {
  margin-top: 20px;
  width: 250px;
  height: 65px;
  background: var(--secondary);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 8px;
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
}

input,
select {
  height: 48px;
  width: 265px;
  border: none;
  background: rgba(237, 127, 32, 0.15);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2px 10px;
  font-family: Roboto;
  font-size: 1rem;
}

.longinput {
  width: 588px;
}

.title {
  width: 95px;
}

label {
  font-weight: 500;
  font-size: 18px;
  color: #000000;
}
.reset {
  cursor: pointer;
}
</style>
