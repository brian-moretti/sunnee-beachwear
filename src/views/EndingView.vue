<script setup lang="ts">
import { useStatoAvanzamentoStore } from '@/stores/statoAvanzamento'
import { onMounted } from 'vue'

const statoAvanzamento = useStatoAvanzamentoStore()

onMounted(() => {
  statoAvanzamento.completeFlow()
})
</script>

<template>
  <h1>Thanks</h1>
</template>
