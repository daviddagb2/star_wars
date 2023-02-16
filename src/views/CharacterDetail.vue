<template>
  <div class="sw_character_detail">
    <div class="sw_detail_container">
      <div class="container">
        <div class="row" v-if="character.loading">
          <PreloaderAnim></PreloaderAnim>
        </div>

        <div class="row" v-if="!character.loading">
          <h2>{{ character.data.name }}</h2>
        </div>

        <div class="row" v-if="!character.loading">
          <div class="col-4">
            <div class="hud_ui"></div>
          </div>

          <div class="col">
            <div class="content_info">
              <div class="col">
                <table class="table table-hover">
                  <tr class="table-dark">
                    <td>Height</td>
                    <td>
                      <span class="tbinfo">{{ character.data.height }}</span>
                    </td>
                  </tr>

                  <tr class="table-dark">
                    <td>Mass</td>
                    <td>
                      <span class="tbinfo"> {{ character.data.mass }} </span>
                    </td>
                  </tr>

                  <tr class="table-dark">
                    <td>Hair color</td>
                    <td>
                      <span class="tbinfo">
                        {{ character.data.hair_color }}
                      </span>
                    </td>
                  </tr>

                  <tr class="table-dark">
                    <td>Eye color</td>
                    <td>
                      <span class="tbinfo">
                        {{ character.data.eye_color }}
                      </span>
                    </td>
                  </tr>

                  <tr class="table-dark">
                    <td>Birth year</td>
                    <td>
                      <span class="tbinfo">
                        {{ character.data.birth_year }}
                      </span>
                    </td>
                  </tr>

                  <tr class="table-dark">
                    <td>Gender</td>
                    <td>
                      <span class="tbinfo"> {{ character.data.gender }} </span>
                    </td>
                  </tr>

                  <tr class="table-dark">
                    <td>Homeworld</td>
                    <td>
                      <span class="tbinfo">
                        {{ character.data.homeworld }}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreloaderAnim from "../components/utils/PreloaderAnim.vue";
import { onMounted, ref, reactive } from "vue";
import axios from "axios";

export default {
  props: {},
  components: {
    PreloaderAnim,
  },
  setup() {
    //return data methods and props
    const characterId = ref(11);
    const character = reactive({
      data: {},
      loading: false,
    });

    function getCharacterDetailFromApi() {
      character.loading = true;
      axios
        .get(`https://swapi.dev/api/people/${characterId.value}/`)
        .then((response) => {
          console.log(response);
          character.data = response.data;
        })
        .finally(() => {
          character.loading = false;
        });
    }

    /* OnMounted function */
    onMounted(() => {
      getCharacterDetailFromApi();
    });

    return { characterId, character };
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
