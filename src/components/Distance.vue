<template>
  <div class="distance">
    <i class="fas fa-map-marker-alt" />
    距離{{ title }}
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  distance: {
    type: Number,
    default: 0,
  },
});

const title = props.distance >= 1000 ? `${props.distance / 1000}公里` : `${props.distance}公尺`;
</script>
