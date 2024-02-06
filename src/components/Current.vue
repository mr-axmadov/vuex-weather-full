<template>
  <div class="current" v-if="weather">
    <div class="current__left">
      <h2 class="current__left-temp">{{ Math.round(getCurrent.temp) }}°</h2>
      <p class="current__left-day">Сегодня</p>
      <p class="current__left-time">Время: {{ getTime }}</p>
      <p class="current__left-city">Город: {{ weather.name }}</p>
      <div class="current__left-img">
        <img v-if="desc == 'clear sky'" src="../assets/images/animated/day.svg" alt="" />
        <img v-else-if="desc == 'few clouds'" src="../assets/images/animated/cloudy-day-2.svg" alt=""/>
        <img v-else-if="desc == 'light rain'" src="../assets/images/animated/rainy-3.svg" alt="" />
        <img v-else-if="desc == 'rain'" src="../assets/images/animated/rainy-1.svg" alt="" />
        <img  v-else-if="desc == 'moderate rain'" src="../assets/images/animated/rainy-4.svg"  alt="" />
        <img v-else-if="desc == 'snow'" src="../assets/images/animated/snowy-5.svg" alt="" />
        <img  v-else-if="desc == 'light snow'" src="../assets/images/animated/snowy-1.svg" alt="" />
        <img v-else-if="desc == 'thunderstorm'"  src="../assets/images/animated/thunder.svg" alt=""  />
        <img v-else src="../assets/images/animated/cloudy.svg" alt="" />
      </div>
    </div>

    <div class="current__right">
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/temp.svg" alt="" />
        </div>
        <p class="current__info-temp">Температура</p>
        <p class="current__info-text">
          {{ Math.round(getCurrent.temp) }}° - ощущается как
          {{ Math.round(getCurrent.feels_like) }}°
        </p>
      </div>
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/davleniya.svg" alt="" />
        </div>
        <p class="current__info-temp">Давление</p>
        <p class="current__info-text">
          {{ getCurrent.pressure }} мм ртутного столба - нормальное
        </p>
      </div>
      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/yomgir.svg" alt="" />
        </div>
        <p class="current__info-temp">Осадки</p>
        <p class="current__info-text">{{ getCurrent.weather[0].description }}</p>
      </div>

      <div class="current__info">
        <div class="current__info-img">
          <img src="../assets/images/wind.svg" alt="" />
        </div>
        <p class="current__info-temp">Ветер</p>
        <p class="current__info-text">
          {{ getCurrent.wind_speed }} м/с юго-запад - легкий ветер
        </p>
      </div>

      <img class="current__right-img" src="../assets/images/cloud.png" alt="" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCurrent"]),
    ...mapState(["weather"]),

    getTime() {
      return new Date().toLocaleString("ru-RU", {
        timeZone: this.weather.timezone,
        timeStyle: "short",
      });
    },
    desc() {
      return this.getCurrent.weather[0].description;
    },
  },
};
</script>
<style lang=""></style>
