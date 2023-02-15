<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="navbar navbar-dark navbar-expand-md bg-dark justify-content-md-center justify-content-start"
  >
    <a class="navbar-brand d-md-none d-inline" href=""></a>
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
          <RouterLink to="/characters" :class="'nav-link'"
            >Characters</RouterLink
          >
        </li>
        <li class="nav-item my-auto">
          <RouterLink to="/about" :class="'nav-link'">About</RouterLink>
        </li>
      </ul>
      <ul
        class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap"
      >
        <li class="nav-item">
          <a class="nav-link" href=""><i class="fa fa-facebook mr-1"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><i class="fa fa-twitter"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav.navbar {
  background-color: red;
}
</style>
