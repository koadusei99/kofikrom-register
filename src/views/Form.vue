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
              <label>Title</label>
              <select class="title" name="title" id="">
                <option v-for="title in titles" :value="title" :key="title">
                  {{ title }}
                </option>
              </select>
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label>First Name</label>
                <input type="text" />
              </div>

              <div class="form-section">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label>Phone</label>
                <input type="tel" />
              </div>

              <div class="form-section">
                <label>Gender</label>
                <select name="gender" id="">
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>

            <div class="form-section">
              <label>Email</label>
              <input class="longinput" type="email" />
            </div>

            <div class="form-section">
              <label>Organization / Company / Institution</label>
              <input class="longinput" type="text" />
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label>Profession</label>
                <select name="Profession" id="profession">
                  <option v-for="p in professions" :value="p" :key="p">
                    {{ p }}
                  </option>
                </select>
              </div>

              <div class="form-section">
                <label>Specialization</label>
                <input type="text" />
              </div>
            </div>

            <div class="form-section">
              <label>Address</label>
              <input class="longinput" type="text" />
            </div>

            <div class="form-section-row">
              <div class="form-section">
                <label>Region</label>
                <select name="region" id="">
                  <option v-for="r in regions" :key="r" :value="r">
                    {{ r }}
                  </option>
                </select>
              </div>

              <div class="form-section">
                <label>Country</label>
                <input disabled type="note" placeholder="Ghana" />
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

          <div>
            <img src="../assets/icon-refresh.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="form-btn">
        <button>Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      formData: {},
    };
  },
  computed: {
    ...mapGetters(["conference", "professions", "titles", "regions"]),
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
  align-items: center;
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
  margin-bottom: 30px;
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
</style>
