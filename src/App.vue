<template>
  <div class="vh-100 d-flex flex-column">
    <Header />
    <div class="flex-fill">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>
