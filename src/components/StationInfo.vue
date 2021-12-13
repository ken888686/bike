<template>
  <div class="station-card">
    <h5 class="station-card-title">
      太原廣場
    </h5>
    <div class="d-flex justify-content-between align-items-center">
      <Quantity
        title="可租借"
        :quantity="10"
      />
      <Quantity
        title="可停車"
        :quantity="10"
        icon="parking"
      />
    </div>
    <div class="station-card-status">
      <State
        :rent="10"
        :parkingSpace="20"
      />
      <Distance :distance="1000" />
    </div>
  </div>
</template>
<script setup>
import Quantity from './Quantity.vue';
import State from './State.vue';
import Distance from './Distance.vue';
</script>
