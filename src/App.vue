<script >
import { store } from "./components/store.js";
import axios from "axios";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data(){
    return{
      store,
      title: "",
      string: `${store.searchStr}+ "movie?" +${this.title}+${store.apiKey}`,
      stringTv: `${store.baseUrl}+ "tv?" +${store.apiKey}+ ${this.title}`,
    }
  },
  created() {
   
  },
  components: { AppHeader, AppMain, AppFooter },

}

</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />

</template>

<style lang="scss">
  @use './styles/general.scss'
</style>