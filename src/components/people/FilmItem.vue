<template>
  <div class="sw_poster">
    <RouterLink :to="`/films/${filmId}`" :class="'filmlink'">
      <div class="card">
        <div :class="'episodeposter ep' + film.episode_id"></div>
        <div class="card-body">
          <h5 class="card-title">{{ film.title }}</h5>
          <p class="card-text">Director: {{ film.director }}</p>

          <p class="card-text">Release date: {{ film.release_date }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    film: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function. The function receives the raw
      // props received by the component as the argument.
    },
    hasImage: { type: Boolean, required: true, default: false },
  },
  setup(props) {
    //return data methods and props

    const filmId = computed(() => {
      var parts = props.film.url.split("/");
      var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
      return lastSegment;
    });

    return { filmId };
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
    .episodeposter {
      min-height: 350px;
      width: 100%;
      background-position: center;
      background-size: contain;
      background-color: black;
      background-repeat: no-repeat;
    }
    .card-body {
      a {
        text-decoration: none;
        color: black;
      }
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
  }
}
</style>
