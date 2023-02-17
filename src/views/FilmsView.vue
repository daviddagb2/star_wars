<template>
  <div class="sw_characters_container">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            <h1>Star wars Films</h1>
          </div>
        </div>

        <div class="col-md-6"></div>
      </div>

      <div class="row">
        <HudLoaderAnim v-show="films.loading"></HudLoaderAnim>
        <div
          class="col-sm-12 col-sm-6 col-md-6 col-lg-3"
          v-for="(value, key) in films.list"
          :key="key"
        >
          <FilmItem :film="value" :has-image="false" />
        </div>
      </div>

      <div class="row">
        <div class="col align-self-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HudLoaderAnim from "../components/utils/HudLoaderAnim.vue";
import FilmItem from "../components/people/FilmItem.vue";
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  props: {},
  components: {
    HudLoaderAnim,
    FilmItem,
  },
  setup() {
    //return data methods and props
    const films = reactive({
      list: [],
      page: 1,
      loading: false,
      count: 82,
      maxpages: 5,
    });

    //Methods
    function getDataFromAPI(page) {
      films.loading = true;
      var params = new URLSearchParams([["page", page]]);
      axios
        .get(`https://swapi.dev/api/films/`, { params })
        .then((response) => {
          films.list = response.data.results;
          films.count = response.data.count;
          films.maxpages = Math.ceil(films.count / 10);
        })
        .finally(() => {
          films.loading = false;
        });
    }

    //Methods const
    const nexPage = () => {
      if (films.page < films.maxpages) {
        films.page++;
      }
      getDataFromAPI(films.page);
    };

    const prevPage = () => {
      if (films.page > 1) films.page--;
      getDataFromAPI(films.page);
    };

    const goToPage = (page) => {
      films.page = page;
      getDataFromAPI(films.page);
    };

    /* OnMounted function */
    onMounted(() => {
      getDataFromAPI(films.page);
    });

    return { films, nexPage, prevPage, goToPage };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
