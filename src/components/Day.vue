<template>
  <div class="day">
    <h3 class="day__title">{{ getWeek }}</h3>
    <p class="day__date">{{ getDay }} {{ getMonth }}</p>
    <img v-if="desc == 'clear sky'" src="../assets/images/animated/day.svg" alt="" />
    <img
      v-else-if="desc == 'few clouds'"
      src="../assets/images/animated/cloudy-day-2.svg"
      alt=""
    />
    <img
      v-else-if="desc == 'light rain'"
      src="../assets/images/animated/rainy-3.svg"
      alt=""
    />
    <img v-else-if="desc == 'rain'" src="../assets/images/animated/rainy-1.svg" alt="" />
    <img
      v-else-if="desc == 'moderate rain'"
      src="../assets/images/animated/rainy-4.svg"
      alt=""
    />
    <img v-else-if="desc == 'snow'" src="../assets/images/animated/snowy-5.svg" alt="" />
    <img
      v-else-if="desc == 'light snow'"
      src="../assets/images/animated/snowy-1.svg"
      alt=""
    />
    <img
      v-else-if="desc == 'thunderstorm'"
      src="../assets/images/animated/thunder.svg"
      alt=""
    />
    <img v-else src="../assets/images/animated/cloudy.svg" alt="" />
    <p class="day__max">
      {{
        Math.round(day.temp.max) > 0
          ? "+" + Math.round(day.temp.max)
          : Math.round(day.temp.max)
      }}°
    </p>
    <p class="day__min">{{
        Math.round(day.temp.min) > 0
          ? "+" + Math.round(day.temp.min)
          : Math.round(day.temp.min)
      }}°</p>
    <p class="day__descr">{{ desc }}</p>
  </div>
</template>
<script>
export default {
  props: {
    day: Object,
  },
  computed: {
    desc() {
      return this.day.weather[0].description;
    },
    getWeek() {
      const milliSec = this.day.dt * 1000;
      const date = new Date(milliSec);
      return date.toLocaleString("en-US", {
        weekday: "long",
      });
    },
    getDay() {
      const milliSec = this.day.dt * 1000;
      const date = new Date(milliSec);
      return date.toLocaleString("en-US", {
        day: "numeric",
      });
    },
    getMonth() {
      const milliSec = this.day.dt * 1000;
      const date = new Date(milliSec);
      return date.toLocaleString("en-US", {
        month: "long",
      });
    },
  },
};
</script>
<style lang=""></style>
