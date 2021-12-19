<template>
  <div class="container">
    <div class="form-page">
      <div class="header">
        <div class="logo">
          <img src="../assets/logo.png" alt="" />
        </div>

        <div class="header-text">
          <p id="main-p">KOFIKROM PHARMACY LTD.</p>
          <p id="sub-p">CONFERENCE / FORUM NAME</p>
        </div>
      </div>

      <div class="body">
        <div class="form">
          <form action="">
            <div class="form-section">
              <label>Title</label>
              <select class="title" name="title" id="">
                <option value="">Mr.</option>
                <option value="">Mrs.</option>
                <option value="">Dr.</option>
                <option value="">Prof.</option>
                <option value="">Pharm.</option>
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
                <input type="text" />
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
                <select name="gender" id="">
                  <option value="">Ahafo</option>
                  <option value="">Western</option>
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
            <img src="../assets/icon-viewtoggle.png" alt="toggle-view" />
          </div>

          <div>
            <router-link to="/overview"
              ><img src="../assets/icon-overview.png" alt="overview"
            /></router-link>
          </div>

          <div>
            <img src="../assets/icon-refresh.png" alt="" />
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
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  height: 1366px;
  background-image: url(../assets/form-background.png);
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
  /* border: 2px solid black; */
}

.header {
  width: 749px;
  height: 134px;
  margin-left: 138px;
  margin-right: 137px;
  display: flex;
  align-items: center;
}

.logo {
  width: 134px;
  height: 134px;
  background: #ffffff;
  border: 5px solid #0277bd;
  box-sizing: border-box;
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
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #0277bd;
  margin-bottom: 15px;
}

.header-text #sub-p {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #f97316;
  background: #ffffff;
  border-radius: 5px;
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
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
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
  /* margin-bottom: 40px; */
  display: flex;
  justify-content: space-between;
}

.sidebar {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 67px;
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
  width: 252.59px;
  height: 65px;
  background: rgba(237, 127, 32, 0.94);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  color: #ffffff;
  cursor: pointer;
}

input,
select {
  height: 48px;
  width: 266.74px;
  border: none;
  background: rgba(237, 127, 32, 0.25);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-left: 10px;
}

.longinput {
  width: 588.04px;
}

.title {
  width: 93.96px;
}

label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #000000;
}
</style>
