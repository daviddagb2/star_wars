<template>
  <div class="sw_menu_item">
    <div class="card shadow-sm">
      <RouterLink :to="url" :class="'characterlink'">
        <img :src="image" />
        <div class="card-body">
          <h1>{{ title }}</h1>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group"></div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
//import { computed } from "vue";
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: "#",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    image: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup() {
    //return data methods and props

    return {};
  },
};
</script>
