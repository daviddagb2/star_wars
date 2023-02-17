<template>
  <nav
    class="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center justify-content-start"
  >
    <div class="container-fluid">
      <a class="navbar-brand d-inline" href=""> </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="nav-link" href="#_"><i class="fa fa-search mr-1"></i></a>
      <div
        class="collapse navbar-collapse justify-content-between align-items-center w-100"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto text-md-center text-left">
          <li class="nav-item">
            <RouterLink to="/" :class="'nav-link'">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/character" :class="'nav-link'"
              >Characters</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/films" :class="'nav-link'">Films</RouterLink>
          </li>
          <li class="nav-item my-auto">
            <RouterLink to="/about" :class="'nav-link'">About</RouterLink>
          </li>
        </ul>
        <SearchTool @gotosearch="gotosearch"></SearchTool>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import SearchTool from "./SearchTool.vue";

export default {
  components: {
    RouterLink,
    SearchTool,
  },
  props: {},
  setup(props, context) {
    //return data methods and props
    function gotosearch(value) {
      context.emit("gotosearch", value);
    }

    return { gotosearch };
  },
};
</script>
