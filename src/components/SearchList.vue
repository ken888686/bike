<template>
  <div class="search-list overflow-auto bg-light">
    <div class="sticky-top search-list-input">
      <SearchGroup />
    </div>
    <div class="search-list-result">
      <StationInfo
        v-for="station in stations"
        :key="station.stationUID"
        :title="station.stationName.tw"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import * as Bike from '@/services/bike';
import SearchGroup from './SearchGroup.vue';
import StationInfo from './StationInfo.vue';

const stations = ref([]);
Bike.getStation('taipei', { $top: 5 }).then((res) => {
  stations.value = res;
});
</script>
