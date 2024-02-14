<script>
import { store } from "./store.js";
import axios from 'axios';

export default{
  data(){
    return{
      store,
      title: '',
    }
  },
  methods:{
    fetch() {
      axios.get(`${store.baseUrl}${store.apiKey}&query=${this.title}`)
        .then(function(response){
          console.log(response.data.results);
          store.movies = response.data.results; 
        })
    }
  }
}

</script>

<template>
  <h1>ciaoooo</h1>
  <input class="form-control" type="search" placeholder="Search" v-model="title"/>
  <button class="btn btn-danger" @click="fetch()">Search</button>
</template>

<style>

</style>
