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
      string: `${store.searchStr}+${this.title}+${store.apiKey}`,
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