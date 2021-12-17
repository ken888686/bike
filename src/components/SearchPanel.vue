<template>
  <div class="search-list overflow-auto bg-light">
    <div class="sticky-top search-list-input">
      <SearchGroup />
    </div>
    <div class="search-list-result">
      <StationInfo
        v-for="station in stations"
        :key="station.uid"
        :title="station.name.tw"
        :rent="50"
        :parkingSpace="10"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import * as BikeService from '@/services/bike';
import SearchGroup from './SearchGroup.vue';
import StationInfo from './StationInfo.vue';

const stations = ref([]);
BikeService.getStationInfoList('taipei', { $top: 5 }).then((res) => {
  // console.log(res);
  stations.value = res;
});
</script>
