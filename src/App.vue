<template>
  <div class="vh-100 d-flex flex-column">
    <Header />
    <div class="flex-grow-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>
