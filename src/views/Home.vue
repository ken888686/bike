<template>
  <div class="home">
    <Quantity
      title="可租借"
      icon="bicycle"
      :quantity="rent"
    />
    <Quantity
      title="可停車"
      icon="parking"
      :quantity="parkingSpace"
    />
    <State
      v-if="rent > 0 || parkingSpace > 0 || !isAvailable"
      :rent="rent"
      :parkingSpace="parkingSpace"
      :isAvailable="isAvailable"
    />
  </div>
</template>

<script setup>
import Quantity from '@/components/Quantity.vue';
import State from '@/components/State.vue';

const rent = 2;
const parkingSpace = 50;
const isAvailable = false;
</script>
