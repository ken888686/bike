<template>
  <div class="d-flex justify-content-between align-items-center search-group">
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
<style lang="scss" scoped>
.btn {
  margin-left: 10px;
}

.search-group {
  padding-top: 28px;
  padding-bottom: 28px;
}
</style>
