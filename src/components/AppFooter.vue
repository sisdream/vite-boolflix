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
      axios.get(`${store.tvUrl}${store.apiKey}&query=${this.title}`)
        .then(function(response){
          console.log(response.data.results);
          store.series = response.data.results; 
        })
    }
  },

}

</script>

<template>

</template>

<style >

</style>
