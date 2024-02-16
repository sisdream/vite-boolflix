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
    fetchAllData() {
      this.fetchMovie();
      this.fetchTv();
    },
    fetchMovie() {
      axios.get(`${store.baseUrl}movie?${store.apiKey}&query=${this.title}`)
        .then(function(response){
          store.movies = response.data.results; 
        })
    },
    fetchTv() {
      axios.get(`${store.baseUrl}tv?${store.apiKey}&query=${this.title}`)
        .then(function(res){
          store.series = res.data.results; 
      })
    },
  },

}

</script>

<template>
  <header>
    <img src="/logo.png" alt="logo">
    <section>
      <input class="form-control" type="search" placeholder="Search" v-model="title"/>
      <button class="btn btn-danger" @click="fetchAllData()">Cerca</button>
    </section>
  </header>
</template>

<style lang="scss">
  header{
    height: 100px;
    width: 100%;
    background-color: #1a1a1a;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;


    section{
      display: flex;
      gap: 1rem;
    }
  }

  button{
    padding: 6px 10px;
    font-size: 14px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }

</style>
