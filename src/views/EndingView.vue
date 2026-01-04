<script setup lang="ts">
import SubTitleComponent from '@/components/SubTitleComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { useStatoAvanzamentoStore } from '@/stores/statoAvanzamento'
import { onMounted } from 'vue'

const statoAvanzamento = useStatoAvanzamentoStore()
const title = 'Thanks'
const subTitle = 'We receive your configuration'
const infoCustomer = 'Your bottle will be send in your next order'

onMounted(() => {
  statoAvanzamento.completeFlow()
})
</script>

<template>
  <div class="info-container">
    <div class="title-container">
      <TitleComponent :title="title" :has-svg="true" />
    </div>
    <SubTitleComponent :sub-title="subTitle" />
    <SubTitleComponent :sub-title="infoCustomer" />
    <div class="thanks-container">
      <img
        src="../assets/svg/thanks_kids.svg"
        alt="immagine del sole in alto destra della scritta sunne"
      />
    </div>
  </div>
</template>

<style scoped>
.info-container {
  height: 100dvh;
  align-items: center;
  margin: 3rem 0;
}

.thanks-container {
  width: min(360px, 100%);
  margin-top: 2rem;
}
</style>
