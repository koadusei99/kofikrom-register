<template>
  <div class="home">
    <div class="main-view">
      <div class="main-img">
        <img src="../assets/logo.png" alt="logo" />
      </div>

      <div class="forumname"><p>Conference / Forum Name {{}}</p></div>

      <router-link class="link" to="/register"
        ><button id="btn1">Register</button></router-link
      >
      <router-link class="link" to="/overview"
        ><button id="btn2">Overview</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  height: 1366px;
  background: linear-gradient(205.09deg, #ed7f20 8.08%, #ed7f20 91.25%);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.main-view {
  background-color: #ffffff;
  background-image: url(../assets/landing-flowers.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 778px;
  height: 869px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.main-img {
  width: 308px;
  height: 308px;
  border: 5px solid #0277bd;
  background: #ffffff;
  border-radius: 100%;
  margin: auto;
  margin-top: 54px;
  margin-bottom: 93px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.main-img img {
  width: 213.8px;
  height: 201.46px;
}

.forumname {
  width: 673px;
  height: 77px;
  background: #ffffff;
  border: 1px solid #0277bd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: auto;
  margin-bottom: 69px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.forumname p {
  font-size: 36px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
}

button {
  width: 350px;
  height: 80px;
  border-radius: 8px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  text-decoration: none;
}

#btn1 {
  background: #0277bd;
  border: none;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
}

#btn2 {
  background: #ffffff;
  border: 2px solid #0277bd;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  text-align: center;
  color: #0277bd;
}

.link {
  text-decoration: none;
}
</style>
