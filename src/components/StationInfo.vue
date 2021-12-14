<template>
  <div class="station-card">
    <h5 class="station-card-title">
      {{ props.title }}
    </h5>
    <div class="d-flex justify-content-between align-items-center">
      <Quantity
        title="可租借"
        :quantity="props.rent"
      />
      <Quantity
        title="可停車"
        :quantity="props.parkingSpace"
        icon="parking"
      />
    </div>
    <div class="station-card-status">
      <State
        :rent="props.rent"
        :parkingSpace="props.parkingSpace"
      />
      <Distance :distance="props.distance" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Quantity from './Quantity.vue';
import State from './State.vue';
import Distance from './Distance.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'title',
  },
  rent: {
    type: Number,
    default: 0,
  },
  parkingSpace: {
    type: Number,
    default: 0,
  },
  distance: {
    type: Number,
    default: 0,
  },
});
</script>
