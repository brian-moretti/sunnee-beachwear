<script setup lang="ts">
defineProps({ title: String, color: String, hasSvg: Boolean })
</script>
<template>
  <h1 :style="{ color: color }" :class="{ 'has-svg': hasSvg }">
    {{ title?.slice(0, -1) }}<span class="last-letter">{{ title?.slice(-1) }}</span>
  </h1>
</template>

<style scoped>
h1 {
  font-size: clamp(40px, 3.5vw, 50px);
  font-weight: bold;
  color: #f8f9fa;
  line-height: 1.08;
}

h1 > span {
  font-weight: bold;
  display: inline-block;
  position: relative;
}

h1 > span::after {
  content: none;
}

h1.has-svg > span::after {
  content: '';
  background: url('../assets/svg/sun.svg');
  position: absolute;
  aspect-ratio: 1 / 1;
  top: -25%;
  left: -10%;
  width: clamp(60px, 5vw, 70px);
  z-index: -1;
}
</style>
