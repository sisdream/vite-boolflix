import { reactive } from "vue";


export const store = reactive({
  apiKey: "api_key=28803b319cd5ab6a3ec36e0864880f7a",
  baseUrl: "https://api.themoviedb.org/3/search/movie?",
  tvUrl: "https://api.themoviedb.org/3/search/tv?",
  movies: [],
  series: [],
});