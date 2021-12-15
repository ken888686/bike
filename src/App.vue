<template>
  <div class="vh-100 d-flex flex-column">
    <Header />
    <div class="flex-fill position-relative">
      <Map class="map" />
      <div class="position-absolute top-0 start-0 bottom-0">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Map from '@/components/Map.vue';
</script>
<style lang="scss" scoped>
.map {
  z-index: -1;
}
</style>
