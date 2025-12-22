<script setup lang="ts">
import type { IBtnRouter } from '@/models/interfaces/btnRouter.interface'

defineProps<{ text: string; btnRouter: IBtnRouter }>()
</script>

<template>
  <button type="button" @click="$router.push({ name: btnRouter.name, params: btnRouter.params })">
    {{ text }}
  </button>
</template>
