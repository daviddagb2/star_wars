<template>
  <Transition name="slide-fade">
    <div class="d-flex" v-if="isSearchActive">
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <div class="input-group">
          <button
            class="btn btn-outline-success"
            type="button"
            @click="doSearch"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              ></path>
            </svg>
          </button>

          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-describedby="basic-addon1"
            v-model="searchValue"
            @keyup.enter="doSearch"
          />

          <button type="button" class="btn btn-dark" @click="alternateSearch">
            X
          </button>
        </div>
      </div>
    </div>
  </Transition>

  <Transition name="slide-fade">
    <div v-if="!isSearchActive">
      <button type="button" class="btn btn-dark" @click="alternateSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          ></path>
        </svg>
        Search
      </button>
    </div>
  </Transition>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "SearchTool",
  emits: ["gotosearch"],
  props: {},
  components: {},
  setup(props, context) {
    //return data methods and props
    const isSearchActive = ref(false);
    const searchValue = ref("");

    const alternateSearch = () => {
      isSearchActive.value = !isSearchActive.value;
    };

    function doSearch() {
      context.emit("gotosearch", searchValue.value);
    }

    /* OnMounted function */
    onMounted(() => {});

    return { isSearchActive, alternateSearch, doSearch, searchValue };
  },
};
</script>
