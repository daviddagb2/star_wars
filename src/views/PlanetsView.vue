<template>
  <div class="sw_characters_container">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="title">
            <h1>Star wars Planets</h1>
          </div>
        </div>

        <div class="col-md-6">
          <PaginatorComp
            :total="planets.count"
            :current="planets.page"
            @goToPage="goToPage"
          ></PaginatorComp>
        </div>
      </div>

      <div class="row">
        <HudLoaderAnim v-show="planets.loading"></HudLoaderAnim>
        <div
          class="col-sm-12 col-sm-6 col-md-6 col-lg-3"
          v-for="(value, key) in planets.list"
          :key="key"
        >
          <PlanetItem :planet="value" :has-image="false" />
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
import PlanetItem from "../components/people/PlanetItem.vue";
import PaginatorComp from "../components/utils/PaginatorComp.vue";
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  props: {},
  components: {
    HudLoaderAnim,
    PlanetItem,
    PaginatorComp,
  },
  setup() {
    //return data methods and props
    const planets = reactive({
      list: [],
      page: 1,
      loading: false,
      count: 82,
      maxpages: 5,
    });

    //Methods
    function getDataFromAPI(page) {
      planets.loading = true;
      var params = new URLSearchParams([["page", page]]);
      axios
        .get(`https://swapi.dev/api/planets/`, { params })
        .then((response) => {
          planets.list = response.data.results;
          planets.count = response.data.count;
          planets.maxpages = Math.ceil(planets.count / 10);
        })
        .finally(() => {
          planets.loading = false;
        });
    }

    //Methods const
    const nexPage = () => {
      if (planets.page < planets.maxpages) {
        planets.page++;
      }
      getDataFromAPI(planets.page);
    };

    const prevPage = () => {
      if (planets.page > 1) planets.page--;
      getDataFromAPI(planets.page);
    };

    const goToPage = (page) => {
      planets.page = page;
      getDataFromAPI(planets.page);
    };

    /* OnMounted function */
    onMounted(() => {
      getDataFromAPI(planets.page);
    });

    return { planets, nexPage, prevPage, goToPage };
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
