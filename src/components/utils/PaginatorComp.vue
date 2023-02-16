<template>
  <div class="paginatorcontainer">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>

        <li v-for="index in maxPages" :key="index">
          <RouterLink :to="`${link}/${index}`" :class="'page-link'">{{
            index
          }}</RouterLink>
        </li>

        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.paginatorcontainer {
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 30px;
}
</style>

<script>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
export default {
  components: {
    RouterLink,
  },
  props: {
    total: { type: Number, required: true },
    perpage: { type: Number, required: false, default: 10 },
    link: { type: String, required: true },
  },
  setup(props) {
    //return data methods and props
    const totalpages = ref(props.totalpages);

    const maxPages = computed(() => {
      return Math.ceil(props.total / props.perpage);
    });

    return { totalpages, maxPages };
  },
};
</script>
