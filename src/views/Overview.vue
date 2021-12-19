<template>
  <div class="main">
    <div class="header-text">
      <h2 class="heading">Overview</h2>
      <h3 class="heading2">{{ conference.name }}</h3>
    </div>
    <div class="cards">
      <div class="card">
        <p class="value">{{ participants }}</p>
        <div class="btm">
          <h4 class="title">Participants</h4>
          <span class="icon"><img src="../assets/people.svg" alt="" /></span>
        </div>
      </div>
      <div class="card">
        <p class="value">{{ males }}</p>
        <div class="btm">
          <h4 class="title">Males</h4>
          <span class="icon"><img src="../assets/male.svg" alt="" /></span>
        </div>
      </div>
      <div class="card">
        <p class="value">{{ females }}</p>
        <div class="btm">
          <h4 class="title">Females</h4>
          <span class="icon"><img src="../assets/female.svg" alt="" /></span>
        </div>
      </div>
      <div class="card">
        <p class="value">{{ regionCount }}</p>
        <div class="btm">
          <h4 class="title">Regions</h4>
          <span class="icon"><img src="../assets/globe.svg" alt="" /></span>
        </div>
      </div>
      <div class="card">
        <p class="value">{{ participants }}</p>
        <div class="btm">
          <h4 class="title">Emails</h4>
          <span class="icon"><img src="../assets/mail.svg" alt="" /></span>
        </div>
      </div>
      <div class="card">
        <p class="value">{{ organizations }}</p>
        <div class="btm">
          <h4 class="title">Organizations</h4>
          <span class="icon"><img src="../assets/building.svg" alt="" /></span>
        </div>
      </div>
      <div class="card dom">
        <div>
          <h5>Dominant Profession</h5>
          <p>{{ dominantProf }}</p>
        </div>
        <div>
          <h5>Dominant Region</h5>
          <p>{{ dominantRegion }}</p>
        </div>
      </div>
    </div>
    <div class="chart-area">
      <h4>Regional Distribution</h4>
      <canvas id="chart"></canvas>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Chart from "chart.js/auto";

export default {
  mounted() {
    this.renderChart();
  },
  name: "Overview",
  components: {},
  props: {
    statsSheet: Object,
  },
  data() {
    return {};
  },
  computed: {
    sheet() {
      return this.statsSheet;
    },
    regionData() {
      let data = {};
      this.regions.forEach((region, id) => {
        data[region] = this.sheet.getCellByA1(`B${10 + id}`).value;
      });
      return data;
    },
    participants() {
      return this.sheet.getCellByA1("B3").value;
    },
    females() {
      return this.sheet.getCellByA1("B5").value;
    },
    males() {
      return this.sheet.getCellByA1("B4").value;
    },
    organizations() {
      return this.sheet.getCellByA1("B6").value;
    },
    regionCount() {
      return this.sheet.getCellByA1("B7").value;
    },
    dominantProf() {
      return this.sheet.getCellByA1("B8").value;
    },
    dominantRegion() {
      return this.sheet.getCellByA1("B9").value;
    },
    chartData() {
      let data = {
        labels: this.regions,
        datasets: [
          {
            label: "Region Distribution",
            data: Object.values(this.regionData),
            backgroundColor: [
              "#8896aba6",
              "#8896aba6",
              "eaf9d9a6",
              "#5b618aa6",
              "#f39a9da6",
              "#cea0aea6",
              "#7d53dea6",
              "#3aafba69",
              "#c2eabda6",
              "#ed254ea6",
              "#344966a6",
              "#e6aacea6",
              "#9cf6f6a6",
              "#e0d68aa6",
              "#ff9505a6",
              "#e2aedda6",
            ],
            borderColor: [
              "#8896ab",
              "#8896ab",
              "eaf9d9",
              "#5b618a",
              "#f39a9d",
              "#cea0ae",
              "#7d53de",
              "#3aafb9",
              "#c2eabd",
              "#ed254e",
              "#344966",
              "#e6aace",
              "#9cf6f6",
              "#e0d68a",
              "#ff9505",
              "#e2aedd",
            ],
            borderWidth: 1,
            borderRadius: 25,
          },
        ],
      };
      return data;
    },
    ...mapGetters(["regions", "conference"]),
  },
  methods: {
    async loadCells() {},
    async setSlug() {
      let slug = this.sheet.getCellByA1("C2");
      console.log(slug.value);
    },
    renderChart() {
      const ctx = document.getElementById("chart");
      new Chart(ctx, {
        type: "bar",
        data: this.chartData,
        options: {
          responsive: true,

          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.main {
  padding: var(--y-padding) var(--x-padding);
  background-image: url("../assets/overview-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.heading {
  font-size: clamp(40px, 3vw, 48px);
  font-weight: 700;
}
.heading2 {
  margin-top: 15px;
  font-size: clamp(28px, 2.2vw, 40px);
  font-weight: 700;
}
.cards {
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
.card {
  background-color: #fff;
  /* max-width: 180px; */
  flex: 0 0 47%;
  border: 1px solid #e2e2e2af;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 15px;
  align-items: center;
}
.card .btm {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.card .value {
  font-size: clamp(46px, 3vw, 56px);
  font-weight: 700;
  font-family: Inter;
}
.card .title {
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 600;
  color: var(--text-600);
}
.card.dom {
  flex: 0 0 100%;
}
.dom {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.dom h5 {
  font-family: Inter;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 600;
  color: var(--primary);
}
.dom p {
  margin-top: 5px;
  font-size: clamp(16px, 2vw, 18px);
  font-weight: 500;
  color: var(--text-600);
}
.chart-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  margin-top: 100px;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background-color: white;
}
.chart-area h4 {
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 600;
  color: var(--text-900);
}
@media screen and (min-width: 768px) {
  .cards {
    margin-top: 80px;
    gap: 20px;
  }
  .card {
    max-width: 200px;
    gap: 25px;
  }

  .card.dom {
    max-width: 420px;
  }
  .dom {
    gap: 30px;
  }
  .chart-area {
    padding: 30px;
  }
}
</style>
