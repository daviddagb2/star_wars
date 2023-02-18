<script setup>
import MainMenuItem from "../components/utils/MainMenuItem.vue";
</script>

<template>
  <div class="sw_home_container">
    <div class="container">
      <div class="row">
        <div class="col">
          <MainMenuItem
            :url="'/character'"
            :title="'Characters'"
            :image="'./characters.webp'"
          ></MainMenuItem>
        </div>
        <div class="col">
          <MainMenuItem
            :url="'/films'"
            :title="'Films'"
            :image="'./movies.jpeg'"
          ></MainMenuItem>
        </div>
        <div class="col">
          <MainMenuItem
            :url="'/planets'"
            :title="'Planets'"
            :image="'./coruscant.jpeg'"
          ></MainMenuItem>
        </div>
      </div>
    </div>
  </div>
</template>
