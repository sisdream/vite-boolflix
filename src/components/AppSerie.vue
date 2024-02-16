<script>
import { store } from "./store.js";


export default{
  data(){
        return{
            store,
        }
    },
  methods:{
        getFlag(langCode){
            if(langCode == 'it')return new URL('/bandiera-ita.jpg', import.meta.url).href; 
            if(langCode == 'en')return new URL('/bandiera-eng.jpg', import.meta.url).href;
            if(langCode == 'es')return new URL('/bandiera-spn.jpg', import.meta.url).href;
            if(langCode == 'fr')return new URL('/bandiera-fra.jpg', import.meta.url).href;
        },
    }
}
</script>

<template>
    <h1>Serie</h1>

    <ul v-if="store.series.length > 0">
        <li v-for="serie in store.series">
            <h2>Titolo: {{ serie.name}}</h2>
            <h5>Titolo originale: {{ serie.original_name }}</h5>
            <span class="flag">Lingua: 
                <img :src="this.getFlag(serie.original_language)" :alt="serie.original_language">
                </span>
            <div>Voto: {{  Math.ceil(serie.vote_average / 2) }} / 5
                <div>
                    <div>
                        <i v-for="star in 5" :class="(star <= Math.ceil(serie.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                    </div>
                </div>
            </div>
            <div>
                <img v-if="serie.poster_path" class="poster" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" :alt="original_name">
                <img v-else src="/default-poster.jpg" alt="nessun poster trovato" class="poster">
            </div>
        </li>
    </ul>
</template>

<style>
</style>

