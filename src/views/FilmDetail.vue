<template>
  <div class="sw_characters_container">
    <div class="container">
      <div class="row" v-if="film.loading">
        <PreloaderAnim></PreloaderAnim>
      </div>

      <div class="row">
        <div class="col">
          <div class="title">
            <h1>{{ film.data.title }}</h1>
          </div>
        </div>
      </div>

      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="content_info">
            <div class="col">
              <table class="table table-hover">
                <tr class="table-dark">
                  <td>Episode</td>
                  <td>
                    <span class="tbinfo">{{ film.data.episode_id }}</span>
                  </td>
                </tr>
                <tr class="table-dark">
                  <td>Director</td>
                  <td>
                    <span class="tbinfo">{{ film.data.director }}</span>
                  </td>
                </tr>
                <tr class="table-dark">
                  <td>Producer</td>
                  <td>
                    <span class="tbinfo">{{ film.data.producer }}</span>
                  </td>
                </tr>
                <tr class="table-dark">
                  <td>Release date</td>
                  <td>
                    <span class="tbinfo">{{ film.data.release_date }}</span>
                  </td>
                </tr>
                <tr class="table-dark">
                  <td>Last edition</td>
                  <td>
                    <span class="tbinfo">
                      {{ convertedDateTime }}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="col-auto d-none d-lg-block">
          <div :class="'episodeposter ep' + film.data.episode_id"></div>
        </div>
      </div>

      <div class="row" v-if="!film.loading">
        <div class="col">
          <StarWarsIntro :film="film.data"></StarWarsIntro>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarWarsIntro from "../components/Common/StarWarsIntro.vue";
import PreloaderAnim from "../components/utils/PreloaderAnim.vue";
import { onMounted, reactive, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import moment from "moment";

export default {
  props: {},
  components: {
    PreloaderAnim,
    StarWarsIntro,
  },
  setup() {
    //return data methods and props
    const film = reactive({
      data: {},
      loading: false,
      id: 0,
    });

    const route = useRoute();

    function getFilmDetailFromApi() {
      film.loading = true;
      axios
        .get(`https://swapi.dev/api/films/${film.id}/`)
        .then((response) => {
          film.data = response.data;
        })
        .finally(() => {
          film.loading = false;
        });
    }

    const convertedDateTime = computed(() => {
      return moment(film.data.edited).format("MM/DD/YYYY HH:MM");
    });

    /* OnMounted function */
    onMounted(() => {
      film.id = route.params.id;
      getFilmDetailFromApi();
    });

    return { film, convertedDateTime };
  },
};
</script>

<style lang="scss">
.episodeposter {
  min-height: 350px;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-color: black;
  background-repeat: no-repeat;
  min-width: 200px;
}

.ep1 {
  background-image: url("https://m.media-amazon.com/images/I/61lzlKzfcCL._AC_SL1191_.jpg");
}
.ep2 {
  background-image: url("https://m.media-amazon.com/images/I/51BegFsqjNL._AC_.jpg");
}
.ep3 {
  background-image: url("https://m.media-amazon.com/images/I/61jCCwfO6HL.jpg");
}
.ep4 {
  background-image: url("https://m.media-amazon.com/images/I/A1wnJQFI82L.jpg");
}
.ep5 {
  background-image: url("https://m.media-amazon.com/images/I/61mVAe9vAtL._AC_UF894,1000_QL80_.jpg");
}
.ep6 {
  background-image: url("https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f38cb38707f05dc86f483b07c215c7dd_a1fb33f9-f075-438f-bc49-2e8c2a2e2d02_500x.jpg?v=1573653657");
}
</style>
