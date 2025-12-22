<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import SubTitleComponent from '@/components/SubTitleComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import type { ISetupConfig } from '@/models/interfaces/setupConfigBottle.interface'
import CardColorComponent from './CardColorComponent.vue'
import type { IBtnRouter } from '@/models/interfaces/btnRouter.interface'

defineProps<{ isFirstStep: boolean, currentSetupBottle: ISetupConfig, prevBtnRouter: IBtnRouter, colors: Array<string> }>()

const colorToEmit = defineEmits({ colorCode: String })

function sendColor(colorCode: string) {
  //PROVIDE - INJECT
  colorToEmit('colorCode', colorCode)
}

//! GESTIRE FASE E INVIARLA AL CHILD DYNAMIC

const title = 'Config your new bottle'
const backText = 'Return to previous Step'
</script>

<template>
  <TitleComponent :title="title" />
  <SubTitleComponent :sub-title="currentSetupBottle.subTitle" />
  <div class="color-container">
    <CardColorComponent
      v-for="color in colors"
      v-bind:key="color"
      :color-code="color"
      @color-code="sendColor"
    />
  </div>
  <div>
    <ButtonComponent v-if="!isFirstStep" :text="backText" :btn-router="prevBtnRouter" />
    <ButtonComponent :text="currentSetupBottle.text" :btn-router="currentSetupBottle.btnRouter" />
  </div>
</template>

<style scoped>
.color-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>
