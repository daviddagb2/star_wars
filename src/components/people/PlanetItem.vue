<template>
  <div class="sw_poster">
    <!-- <RouterLink :to="`/planets/${planetId}`" :class="'planetlink'">-->
    <a href="#">
      <div class="card">
        <div :class="'planetposter planet' + planetId"></div>
        <div class="card-body">
          <h5 class="card-title">{{ planet.name }}</h5>
          <p class="card-text">Terrain: {{ planet.terrain }}</p>
          <p class="card-text">Population: {{ planet.population }}</p>
        </div>
      </div>
    </a>
    <!-- </RouterLink>-->
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    planet: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function. The function receives the raw
      // props received by the component as the argument.
    },
    hasImage: { type: Boolean, required: true, default: false },
  },
  setup(props) {
    //return data methods and props

    const planetId = computed(() => {
      var parts = props.planet.url.split("/");
      var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
      return lastSegment;
    });

    return { planetId };
  },
};
</script>

<style lang="scss">
.sw_poster {
  width: 100%;
  margin-bottom: 2em;

  a {
    text-decoration: none;
    color: black;
  }

  .card {
    .planetposter {
      min-height: 350px;
      width: 100%;
      background-position: center;
      background-size: contain;
      background-color: black;
      background-repeat: no-repeat;
      background-image: url("/src/assets/planets/Taris.webp");
    }
    .card-body {
      a {
        text-decoration: none;
        color: black;
      }
    }
    .planet1 {
      background-image: url("/src/assets/planets/tatooine.webp");
    }
    .planet2 {
      background-image: url("/src/assets/planets/Alderaan.webp");
    }
    .planet3 {
      background-image: url("/src/assets/planets/yavin4.webp");
    }
    .planet4 {
      background-image: url("/src/assets/planets/Hoth.webp");
    }
    .planet5 {
      background-image: url("/src/assets/planets/Dagobah.webp");
    }
    .planet6 {
      background-image: url("/src/assets/planets/Bespin.webp");
    }
    .planet7 {
      background-image: url("/src/assets/planets/Endor.webp");
    }
    .planet8 {
      background-image: url("/src/assets/planets/Naboo.webp");
    }
    .planet9 {
      background-image: url("/src/assets/planets/Coruscant.webp");
    }
    .planet10 {
      background-image: url("/src/assets/planets/Kamino.webp");
    }
    .planet11 {
      background-image: url("/src/assets/planets/Geonosis.webp");
    }
    .planet12 {
      background-image: url("/src/assets/planets/Utapau.webp");
    }
    .planet13 {
      background-image: url("/src/assets/planets/Mustafar.webp");
    }
    .planet14 {
      background-image: url("/src/assets/planets/Kashyyyk.webp");
    }
    .planet15 {
      background-image: url("/src/assets/planets/PolisMassa.webp");
    }
    .planet16 {
      background-image: url("/src/assets/planets/Mygeeto.webp");
    }
    .planet17 {
      background-image: url("/src/assets/planets/Felucia.webp");
    }
    .planet18 {
      background-image: url("/src/assets/planets/cato.jpeg");
    }
    .planet19 {
      background-image: url("/src/assets/planets/Saleucami.webp");
    }
    .planet20 {
      background-image: url("/src/assets/planets/stewjon.webp");
    }
  }
}
</style>
