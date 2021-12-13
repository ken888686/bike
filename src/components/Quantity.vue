<template>
  <div class="quantity-card bg-disabled-200">
    <div class="d-flex justify-content-center align-items-center text-center">
      <i :class="iconName" />
      <span class="quantity-title"> {{ props.title }} </span>
    </div>
    <div class="quantity-value">
      {{ quantity }}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '標題',
  },
  icon: {
    type: String,
    default: 'bicycle',
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const iconName = `fas fa-${props.icon}`;
</script>

<style lang="scss"></style>
