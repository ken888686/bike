<template>
  <div class="home">
    <Quantity
      title="可停車"
      icon="parking"
      :quantity="quantity"
    />
  </div>
</template>

<script setup>
import Quantity from '@/components/Quantity.vue';

const quantity = 12;
</script>
