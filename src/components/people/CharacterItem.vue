<script setup>
//import { RouterLink } from "vue-router";
</script>

<template>
  <div class="sw_character">
    <div class="card" style="width: 18rem">
      <img
        v-if="hasImage"
        class="card-img-top"
        src="/anakin.webp"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
      <div class="notch-contain"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // type inference enabled
  props: {
    name: String,
    id: [Number, String],
    description: { type: String, required: true },
    hasImage: { type: Boolean, required: true, default: false },
  },
  mounted() {
    this.name; // type: string | undefined
    this.id; // type: number | string | undefined
    this.description; // type: string
    this.hasImage;
  },
});
</script>
