<template>
  <section class="main">
    <img class="logo" src="../assets/logo1.png" width="134" alt="Logo" />
    <div class="bus-card">
      <div class="grd">
        <div class="left">
          <div class="brand">
            <img src="../assets/logo-no-brand.png" height="60" alt="" />
          </div>
          <div class="brand-name"><p>KOFIKROM</p></div>
        </div>
        <div class="bar"></div>
        <div class="right">
          <div class="mdet">
            <p class="lg">
              {{ submission.FirstName }} {{ submission.LastName }}
            </p>
            <p class="md">{{ submission.Profession }}</p>
            <p class="md">{{ submission.Organization }}</p>
          </div>
          <p class="light">
            <span
              ><img src="../assets/ic_baseline-alternate-email.svg" alt=""
            /></span>
            {{ submission.Email }}
          </p>
          <p class="light">
            <span><img src="../assets/akar-icons_phone.svg" alt="" /></span>
            {{ submission.Phone }}
          </p>
        </div>
      </div>
    </div>
    <div class="btns">
      <button class="btn prim-btn" @click="submit">
        <span><img src="../assets/line-md_confirm-circle.svg" alt="" /></span
        ><span>Confirm</span>
      </button>
      <button class="btn sec-btn" @click="$router.push({ name: 'Register' })">
        <span><img src="../assets/akar-icons_edit.svg" alt="" /></span
        ><span>Edit</span>
      </button>
      <button
        class="btn orange-btn"
        @click="$router.push({ name: 'Overview' })"
      >
        <span><img src="../assets/gridicons_stats.svg" alt="" /></span
        ><span>Overview</span>
      </button>
    </div>
    <div class="preview-card">
      <h2>Review your submission</h2>
      <div class="cntnt">
        <div class="top">
          <div class="lt">
            <div class="ig">
              <p class="lbl">Name</p>
              <p class="data">
                {{ submission.FirstName }} {{ submission.LastName }}
              </p>
            </div>
            <div class="ig">
              <p class="lbl">Phone</p>
              <p class="data">
                {{ submission.Phone }}
              </p>
            </div>
            <div class="ig">
              <p class="lbl">Address</p>
              <p class="data">
                {{ submission.Address }}, {{ submission.Region }}
              </p>
            </div>
          </div>
          <div class="rt">
            <div class="ig">
              <p class="lbl">Sex</p>
              <p class="data">
                {{ submission.Gender === "m" ? "Male" : "Female" }}
              </p>
            </div>
            <div class="ig">
              <p class="lbl">Email</p>
              <p class="data">
                {{ submission.Email }}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div class="btm">
          <div class="ig">
            <p class="lbl">Profession</p>
            <p class="data">
              {{ submission.Profession }}
            </p>
          </div>
          <div class="ig">
            <p class="lbl">Specialization</p>
            <p class="data">
              {{ submission.Specialization }}
            </p>
          </div>
          <div class="ig">
            <p class="lbl">Organization</p>
            <p class="data">
              {{ submission.Organization }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Preview",
  computed: {
    ...mapGetters(["submission"]),
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .main {
    padding: var(--y-padding) var(--x-padding) 8rem;
    min-height: 100vh;
    font-family: Inter;
  }
  .logo {
    display: block;
    margin: 0 auto;
  }
  .bus-card {
    width: 600px;
    margin-top: 60px;
    margin-inline: auto;
    border: 1px solid rgba(2, 119, 189, 0.2);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    height: 300px;
    background-image: url("../assets/card-bg.svg");
  }
  .grd {
    height: 100%;
    display: flex;
    align-items: center;
    margin-inline: auto;
    width: fit-content;
  }
  .bus-card .left {
    display: flex;
    align-items: center;
  }
  .bus-card .right {
    text-transform: uppercase;
  }
  .left {
    padding-right: 35px;
  }
  .right {
    padding-left: 35px;
  }
  .brand {
    margin-right: 15px;
  }
  .brand-name {
    display: grid;
    place-items: center;
    height: 80px;
    border-left: 2px solid var(--primary);
  }
  .brand-name p {
    margin-left: 15px;
    font-size: 20px;
    color: var(--primary);
    font-weight: 600;
  }
  .lg {
    font-size: 20px;
    font-weight: 600;
  }
  .md {
    font-size: 16px;
    font-weight: 500;
  }
  .light {
    font-size: 12px;
    color: #4b5563;
  }
  .bar {
    height: 250px;
    border: 1px solid rgba(2, 119, 189, 0.3);
    border-radius: 50px;
    filter: blur(1px);
    width: fit-content;
  }
  .mdet {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 15px;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 30px auto;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.6rem 1.25rem;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .sec-btn {
    border: 1px solid var(--primary);
  }
  .orange-btn {
    background-color: white;
    color: var(--secondary);
    border: 1px solid var(--secondary);
  }

  .preview-card {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 1rem;
  }
  .preview-card h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
  }
  .ig {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .lbl {
    font-size: 16px;
    font-weight: 600;
  }
  .data {
    font-size: 18px;
    padding: 10px 15px;
    background-color: rgba(2, 119, 189, 0.1);
    width: fit-content;
    border-radius: 8px;
  }
  .cntnt {
    max-width: 700px;
    margin-inline: auto;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .lt,
  .rt {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  hr {
    margin-block: 2rem;
    color: rgba(2, 119, 189, 0.4);
  }
  .btm {
    display: grid;
    grid-auto-flow: column;
  }
}
</style>
