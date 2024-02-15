<script>
import { store } from './store';

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
            return '/bandiera-vuota.jpg';
        }
    }
}
</script>

<template>
    <ul v-if="store.movies.length > 0">
        <li v-for="movie in store.movies">
          <h2>Titolo: {{ movie.title }}</h2>
          <h5>Titolo originale: {{ movie.original_title }}</h5>
          <span class="flag">Lingua: 
            <img :src="getFlag(movie.original_language)" alt="">
            </span>
          <div>Voto: {{ movie.vote_average }} / 10</div>
          <div>immagine:<img :src="movie.poster_path" alt=""></div>
        </li>
      </ul>
</template>

<style lang="scss">
    .flag{
        display: flex;
        gap: 1rem;
        margin: 5px;
        height: 25px;
    }
</style>