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
  transition: transform 0.1s ease;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
}

div:active {
  transform: scale(0.95);
}

@media (width < 1280px) {
  .square {
    width: max(70px, 100%);
  }
}
</style>
