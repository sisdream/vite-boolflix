<script>
import { store } from './store';

export default{
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <ul v-if="store.movies.length > 0">
        <li v-for="movie in store.movies">
          <h1>{{ movie.title }}</h1>
          <h3>{{ movie.original_title }}</h3>
          <span>{{ movie.original_language }}</span>
        </li>
      </ul>
</template>

<style>

</style>