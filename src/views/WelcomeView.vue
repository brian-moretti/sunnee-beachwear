<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import type { IBtnRouter } from '@/models/interfaces/btnRouter.interface'
import { useStatoAvanzamentoStore } from '@/stores/statoAvanzamento'
import { onMounted } from 'vue'

const statoAvanzamento = useStatoAvanzamentoStore()

onMounted(() => {
  statoAvanzamento.resetFlow()
})

const title = 'Welcome in Sunnee'
const btnText = 'Configure my bottle'
const btnRouter: IBtnRouter = {
  name: 'config',
  params: { id: '1' },
}
</script>

<template>
  <TitleComponent :title="title" />
  <img src="" alt="immagine del sole in alto destra della scritta sunne" />
  <!--  -->
  <p>Be ready for our new kids collection this Summer</p>

  <p>For your first order you are going to receive a (termic bottle)</p>
  <p>
    This bottle is made through (processo sostenibile) and you can configure it in so many different
    styles
  </p>
  <p></p>
  <ButtonComponent :text="btnText" :btn-router="btnRouter" />
</template>

<style :scoped>
  
</style>
