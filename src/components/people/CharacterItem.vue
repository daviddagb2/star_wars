<template>
  <div class="sw_spacebtn">
    <RouterLink :to="`/character/${characterId}`" :class="'characterlink'">
      <div class="btn_container">
        <div class="btn">
          {{ character.name }}
          <span
            ><svg
              width="16"
              height="17"
              viewBox="0 0 26 27"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0607 13.0607C22.6464 12.4749 22.6464 11.5251 22.0607 10.9393L12.5147 1.3934C11.9289 0.807612 10.9792 0.807612 10.3934 1.3934C9.80761 1.97918 9.80761 2.92893 10.3934 3.51472L18.8787 12L10.3934 20.4853C9.80761 21.0711 9.80761 22.0208 10.3934 22.6066C10.9792 23.1924 11.9289 23.1924 12.5147 22.6066L22.0607 13.0607ZM0 13.5H21V10.5H0V13.5Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <svg
          class="svgStroke"
          width="222"
          height="85"
          viewBox="0 0 222 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M205 84H21L1 63.4941V18.5765L21 1H205L221 18.5765V63.4941L205 84Z"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    character: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function. The function receives the raw
      // props received by the component as the argument.
    },
    hasImage: { type: Boolean, required: true, default: false },
  },
  setup(props) {
    //return data methods and props

    const characterId = computed(() => {
      var parts = props.character.url.split("/");
      var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
      return lastSegment;
    });

    return { characterId };
  },
};
</script>
