<script setup lang="ts">
defineProps({ subTitle: String })
</script>
<template>
  <h3 >{{ subTitle }}</h3>
</template>

<style scoped>
h3 {
  font-weight: 600;
  font-size: 1.125rem;
  color: #343a40;
}
</style>
