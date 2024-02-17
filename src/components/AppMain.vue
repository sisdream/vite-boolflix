<script>
import { store } from "./store";
import AppCard from "./AppCard.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppCard },
};
</script>

<template>
    <main>
        <h2>Film</h2>
        <div class="container">
            <div v-if="store.movies.length > 0" class="row row-cols-xl-5 g-5">
                <div v-for="movie in store.movies" class="col">
                    <AppCard :isFilm="true" :data="movie" />
                </div>
            </div>
        </div>

        <h2 class="serie">Serie</h2>
        <div class="container">
            <div v-if="store.series.length > 0" class="row row-cols-xl-5 g-5">
                <div v-for="serie in store.series" class="col">
                    <AppCard :isFilm="false" :data="serie" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
main {
    padding: 110px 0;
}

h2 {
    text-align: center;
}
.serie{
    margin-top: 6rem;
}
</style>
