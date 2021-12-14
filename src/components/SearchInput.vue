<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control border-0 bg-transparent"
      placeholder="搜尋站點或鄰近地點"
      aria-label="搜尋站點或鄰近地點"
      aria-describedby="search-button-addon"
      @focus="setFocus()"
      @blur="setFocus()"
    >
    <button
      id="search-button-addon"
      class="btn"
      type="button"
    >
      <i class="fas fa-search" />
    </button>
  </div>
</template>
<script setup>
let isFocus = false;
function setFocus() {
  isFocus = !isFocus;
}
</script>
