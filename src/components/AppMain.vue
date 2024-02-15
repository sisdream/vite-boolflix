<script>
import { store } from './store';

export default{
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <ul v-if="store.movies.length > 0">
        <li v-for="movie in store.movies">
          <h2>Titolo: {{ movie.title }}</h2>
          <h5>Titolo originale: {{ movie.original_title }}</h5>
          <span>Lingua originale: {{ movie.original_language }}</span>
          <div>Voto: {{ movie.vote_average }} / 10</div>
        </li>
      </ul>
</template>

<style>

</style>