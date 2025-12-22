<script setup lang="ts">
const prop = defineProps({ colorCode: String })
const emit = defineEmits({ colorCode: String })

function sendColor() {
  emit('colorCode', prop.colorCode)
}
</script>

<template>
  <div class="square" :style="{ '--color': colorCode }" @click="sendColor"></div>
</template>

<style scoped>
.square {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 6px;
  background-color: var(--color);
  cursor: pointer;
}
</style>
