<template>
  <div class="paginatorcontainer">
    <nav aria-label="Page navigation ">
      <ul class="pagination justify-content-end">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>

        <li v-for="index in maxPages" :key="index">
          <span
            @click="setCurrent(index)"
            :class="current == index ? 'page-link active' : 'page-link'"
            >{{ index }}</span
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.paginatorcontainer {
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>

<script>
import { ref, computed } from "vue";
export default {
  components: {},
  props: {
    total: { type: Number, required: true },
    perpage: { type: Number, required: false, default: 10 },
    current: { type: Number, required: true },
  },
  setup(props, context) {
    //return data methods and props
    const totalpages = ref(props.totalpages);
    const currentPage = ref(props.current);

    const maxPages = computed(() => {
      return Math.ceil(props.total / props.perpage);
    });

    const setCurrent = (index) => {
      currentPage.value = index;
      context.emit("goToPage", currentPage.value);
    };

    return { totalpages, maxPages, setCurrent };
  },
};
</script>
