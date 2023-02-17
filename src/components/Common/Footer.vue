<template>
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <RouterLink to="/" :class="'nav-link px-2 text-muted'"
            >Home</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/character" :class="'nav-link px-2 text-muted'"
            >Characters</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/films" :class="'nav-link px-2 text-muted'"
            >Films</RouterLink
          >
        </li>
        <li class="nav-item my-auto">
          <RouterLink to="/about" :class="'nav-link px-2 text-muted'"
            >About</RouterLink
          >
        </li>
      </ul>
      <p class="text-center text-muted">© 2023 Gonzalez Blanchard</p>
    </footer>
  </div>
</template>
