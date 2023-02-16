<template>
  <div class="sw_characters_container">
    <div class="container">
      <div class="row">
        <div class="title">
          <h1>Star wars characters</h1>
        </div>
      </div>

      <div class="row">
        <HudLoaderAnim v-show="characters.loading"></HudLoaderAnim>
        <div
          class="col-sm-12 col-sm-6 col-md-6 col-lg-3"
          v-for="(value, key) in characters.list"
          :key="key"
        >
          <CharacterItem
            :name="value.name"
            :has-image="false"
            :id="1"
            :price="200"
            :pricer="200"
          />
        </div>
      </div>

      <div class="row">
        <div class="col align-self-center">
          <PaginatorComp :total="characters.count"></PaginatorComp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HudLoaderAnim from "../components/utils/HudLoaderAnim.vue";
import CharacterItem from "../components/people/CharacterItem.vue";
import PaginatorComp from "../components/utils/PaginatorComp.vue";

import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  props: {},
  components: {
    HudLoaderAnim,
    CharacterItem,
    PaginatorComp,
  },
  setup() {
    //return data methods and props
    const characters = reactive({
      list: [],
      page: 1,
      loading: false,
      count: 82,
      maxpages: 5,
    });

    //Methods
    function getDataFromAPI(page) {
      characters.loading = true;
      console.log("get data");
      var params = new URLSearchParams([["page", page]]);
      axios
        .get(`https://swapi.dev/api/people/`, { params })
        .then((response) => {
          characters.list = response.data.results;
          characters.count = response.data.count;
          characters.maxpages = Math.ceil(characters.count / 10);
        })
        .finally(() => {
          characters.loading = false;
        });
    }

    //Methods const
    const nexPage = () => {
      if (characters.page < characters.maxpages) {
        characters.page++;
      }
      getDataFromAPI(characters.page);
    };

    const prevPage = () => {
      if (characters.page > 1) characters.page--;
      getDataFromAPI(characters.page);
    };

    /* OnMounted function */
    onMounted(() => {
      getDataFromAPI(characters.page);
    });

    return { characters, nexPage, prevPage };
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
