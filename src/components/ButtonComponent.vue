<script setup lang="ts">
import type { IBtnRouter } from '@/models/interfaces/btnRouter.interface'

defineProps<{ text: string; btnRouter: IBtnRouter }>()
</script>

<template>
  <button type="button" @click="$router.push({ name: btnRouter.name, params: btnRouter.params })">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 100%;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: none;
  padding: 8px 24px;
  font-size: 1.25rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.42);
  cursor: pointer;
  transition: transform 0.1s ease;
  margin: 1.125rem 0;
  background: linear-gradient(90deg, #ffb703, #fb8500);
  color: #023047;
}

button:active {
  transform: scale(0.95);
}
</style>
