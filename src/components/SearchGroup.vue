<template>
  <div class="d-flex justify-content-between align-items-center">
    <SearchInput />
    <button
      type="button"
      class="btn btn-outline-primary btn-header text-nowrap"
    >
      <i class="fas fa-sort-amount-down" />
      排序
    </button>
  </div>
</template>
<script setup>
import SearchInput from './SearchInput.vue';
</script>
