<template>
  <div class="navi">
    <router-link class="link" to="/"
      ><div>
        <span class="icon"><img src="../assets/nav-home.svg" alt="" /></span
        ><span class="txt">Home</span>
      </div></router-link
    >
    <router-link class="link" to="/register"
      ><div>
        <span class="icon"><img src="../assets/nav-at.svg" alt="" /></span
        ><span class="txt">Register</span>
      </div></router-link
    >
    <router-link class="link" to="/preview"
      ><div>
        <span class="icon"><img src="../assets/nav-prev.svg" alt="" /></span
        ><span class="txt">Preview</span>
      </div></router-link
    >
    <router-link class="link" to="/overview"
      ><div>
        <span class="icon"><img src="../assets/nav-chart.svg" alt="" /></span
        ><span class="txt">Overview</span>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Navi",
};
</script>

<style scoped>
.navi {
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  justify-content: center;
  border-radius: 30px 30px 0 0;
}
.link {
  text-decoration: none;
  color: var(--text-600);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 10px 20px;
  transition: all 150ms ease-in;
  border-radius: 30px;
}
.link:hover {
  background-color: rgba(2, 119, 187, 0.15);
}
.link.router-link-exact-active {
  background-color: rgba(2, 119, 187, 0.25);
}
.link > div {
  display: flex;
  gap: 10px;
  align-items: center;
}
.link .txt {
}
.icon {
  width: 40px;
  display: block;
}
.icon img {
  width: 100%;
}
</style>
