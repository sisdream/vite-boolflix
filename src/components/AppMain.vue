<script>
import { store } from './store';
import AppSerie from './AppSerie.vue';

export default{
    data(){
        return{
            store,
        }
    },
    components: { AppSerie },
    methods:{
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
    <main>
        <h1>Film</h1>
        <ul v-if="store.movies.length > 0">
            <li v-for="movie in store.movies">
                <h2>Titolo: {{ movie.title }}</h2>
                <h5>Titolo originale: {{ movie.original_title }}</h5>
                <span class="flag">Lingua: 
                    <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
                    </span>
                <div>Voto: {{ Math.ceil(movie.vote_average / 2) }} / 5
                    <div>
                        <i v-for="star in 5" :class="(star <= Math.ceil(movie.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                    </div>
                </div>
                <div>
                    <img v-if="movie.poster_path" class="poster" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
                    <img v-else src="/default-poster.jpg" alt="nessun poster trovato" class="poster">
                </div>
            </li>
        </ul>
        <AppSerie />
    </main>
</template>

<style lang="scss">
    main{
        padding: 110px 0;
    }

    h1{
        text-align: center;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;


        li{
            border: 1px solid red;
            width: calc(100% / 3 - 50px);
        }
    }

    .flag{
        display: flex;
        gap: 1rem;
        margin: 5px;
        height: 25px;
    }
</style>