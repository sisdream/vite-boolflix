<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-face flip-card-face-front">
                <img
                    v-if="data.poster_path"
                    class="poster"
                    :src="`https://image.tmdb.org/t/p/w342/${data.poster_path}`"
                    :alt="data.title"
                />
                <img v-else  class="poster" src="/default-poster.jpg" alt="nessun poster trovato" />
            </div>

            <div class="flip-card-face flip-card-face-back">
                <h4 class="p-0">Titolo: {{ isFilm ? data.title : data.name}}</h4>
                <h6 class="p-0 my-2">Titolo originale: {{ isFilm ? data.original_title : data.original_name }}</h6>
                <span class="flag p-0"
                    >Lingua:
                    <img :src="getFlag(data.original_language)" :alt="data.original_language" />
                </span>

                <div class="p-0">
                    Voto: {{ Math.ceil(data.vote_average / 2) }} / 5
                    <div>
                        <i
                            v-for="star in 5"
                            :class="
                                star <= Math.ceil(data.vote_average / 2) ? 'fa-solid fa-star' : 'fa-regular fa-star'
                            "
                        ></i>
                    </div>
                </div>
                <p>Trama: {{ data.overview }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        isFilm: Boolean,
        data: Object,
    },
    methods: {
        getFlag(langCode) {
            if (langCode == "it") return new URL("/bandiera-ita.jpg", import.meta.url).href;
            if (langCode == "en") return new URL("/bandiera-eng.jpg", import.meta.url).href;
            if (langCode == "es") return new URL("/bandiera-spn.jpg", import.meta.url).href;
            if (langCode == "fr") return new URL("/bandiera-fra.jpg", import.meta.url).href;
        },
    },
};
</script>

<style lang="scss" scoped>
.flip-card{
    height: 300px;
    width: 100%;
    perspective: 600px;
    
    &:hover .flip-card-inner {
        transform: rotateY(180deg);
    }
}

.flip-card-inner{
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    transition: transform .8s;
    transform-style: preserve-3d;

}

.flip-card-face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
}

.flip-card-face-front {
    width: 100%;
}

.flip-card-face-back{
    position: relative;
    overflow: auto;
    padding: 1rem 0.4rem 0.4rem;
    color: #fff;
    background-color: #000;
    transform: rotateY( 180deg );
}
.poster{
   object-fit: contain;
   width: 100%;
   height: 100%;
}
.flag {
    display: flex;
    gap: 1rem;
    margin: 5px;
    height: 25px;
}

.fa-star{
    color: #b8860b;
}
</style>
