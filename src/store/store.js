import axios from "axios";
import { createStore } from "vuex";


const store = createStore({
    state: {
        apiKey: "ea8274c23d69472828079f18267fc41b",
        weather: null,
    },
    mutations: {
        setWeather(state, payload) {
            state.weather = payload
        }
    },
    actions: {
        async getWeather({ state, commit }, city) {
            try {
                let res = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}&lang=ru`)
                let data = res.data[0]
                const { lat, lon, local_names } = data
                let name = local_names.ru
                let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric`)
                let api = {
                    ...res2.data,
                    name
                }

                commit('setWeather', api)

            } catch (error) {

            }
        }
    },
    getters: {
        getCurrent: state => state.weather.current,
        getDay: state => state.weather?.daily.filter((day, i, arr) => i < arr.length - 1)
    }
})
export default store