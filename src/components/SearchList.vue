<template>
  <div class="search-list overflow-auto bg-light">
    <div class="sticky-top search-list-input">
      <SearchGroup />
    </div>
    <div class="search-list-result">
      <StationInfo />
      <StationInfo />
      <StationInfo />
      <StationInfo />
      <StationInfo />
    </div>
  </div>
</template>
<script setup>
import SearchGroup from './SearchGroup.vue';
import StationInfo from './StationInfo.vue';
</script>
