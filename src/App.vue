<script >
import { store } from "./components/store.js";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data(){
    return{
      store,
      title: "",
    }
  },
  created() {
   
  },
  components: { AppHeader, AppMain},

}

</script>

<template>

  <AppHeader />

  <AppMain />

</template>

<style lang="scss">
  @use './styles/general.scss'
</style>