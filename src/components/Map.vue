<template>
  <l-map
    class="h-100"
    :zoom="zoom"
    :center="center"
    :options="{ zoomControl: false }"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    />
  </l-map>
</template>

<script setup>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const zoom = 8;
const center = [23.97565, 120.9738819];
</script>
