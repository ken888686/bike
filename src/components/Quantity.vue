<template>
  <div
    class="quantity-card"
    :class="`quantity-card-${status}`"
  >
    <div class="d-flex justify-content-center align-items-center text-center">
      <i :class="iconName" />
      <span class="quantity-card-title"> {{ props.title }} </span>
    </div>
    <div class="quantity-card-value">
      {{ quantity }}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'title',
  },
  icon: {
    type: String,
    default: 'bicycle',
  },
  quantity: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const iconName = `fas fa-${props.icon}`;

function getStatus() {
  if (props.quantity === 0 || !props.isAvailable) {
    return 'disabled';
  }
  if (props.quantity <= 5) {
    return 'limited';
  }
  return '';
}
const status = getStatus();
</script>
