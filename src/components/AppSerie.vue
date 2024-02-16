<script>
import { store } from "./store.js";
import axios from 'axios';

export default{
  data(){
        return{
            store,
            title: '',
            stringTv: `${store.baseUrl}tv?${store.apiKey}&query=scrubs`,
        }
    },
    mounted(){
        this.fetch()
    },
  methods:{
        fetch() {
            axios.get(this.stringTv)
            .then(function(res){
                store.series = res.data.results; 
            })
        },
        getFlag(langCode){
            if(langCode == 'it')return new URL('/bandiera-ita.jpg', import.meta.url).href; 
            if(langCode == 'en')return new URL('/bandiera-eng.jpg', import.meta.url).href;
            if(langCode == 'es')return new URL('/bandiera-spn.jpg', import.meta.url).href;
            if(langCode == 'fr')return new URL('/bandiera-fra.jpg', import.meta.url).href;
        }
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
          <div>Voto: {{ serie.vote_average }} / 10</div>
          <div>immagine:<img class="poster" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" alt=""></div>
        </li>
    </ul>
    <!-- <p v-else>non ci sono elementi</p> -->
</template>

<style>
</style>

