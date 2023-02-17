<script setup>
import { RouterView, useRouter } from "vue-router";
import NavMenu from "./components/Common/NavMenu.vue";
import FooterComponent from "./components/Common/Footer.vue";

const routerUse = useRouter();

function gotosearch(value) {
  console.log(value);
  routerUse.push({
    name: "character",
    query: {
      name: value,
    },
  });
}
</script>

<template>
  <header>
    <div class="logo"></div>

    <div class="wrapper">
      <NavMenu @gotosearch="gotosearch"></NavMenu>
    </div>
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  border-bottom: 1px solid #d2d2d2;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    /* max-width: 900px;*/
  }
}
</style>
