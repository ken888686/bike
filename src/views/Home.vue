<template>
  <div class="home container">
    <Distance :distance="distance" />
    <Distance :distance="1234" />
  </div>
</template>

<script setup>
import Distance from '@/components/Distance.vue';

const distance = 1032;
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  border: 1px solid black;
}
</style>
