<template>
  <div
    class="state"
    :class="status"
  >
    {{ title }}
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  rent: {
    type: Number,
    default: 0,
  },
  parkingSpace: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

let status = '';
function getStatus() {
  if (!props.isAvailable) {
    status = 'state-disabled';
    return '站點施工中';
  }

  if (props.rent > 0 && props.parkingSpace > 0) {
    return '可借可還';
  }
  if (props.rent === 0 && props.parkingSpace > 0) {
    status = 'state-limited';
    return '只可停車';
  }
  if (props.rent > 0 && props.parkingSpace === 0) {
    status = 'state-limited';
    return '只可借車';
  }
  return 'None';
}

const title = getStatus();
</script>
