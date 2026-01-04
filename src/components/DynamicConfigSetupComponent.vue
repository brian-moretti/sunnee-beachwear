<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import SubTitleComponent from '@/components/SubTitleComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import type { ISetupConfig } from '@/models/interfaces/setupConfigBottle.interface'
import CardColorComponent from './CardColorComponent.vue'
import type { IBtnRouter } from '@/models/interfaces/btnRouter.interface'

defineProps<{
  isFirstStep: boolean
  currentSetupBottle: ISetupConfig
  prevBtnRouter: IBtnRouter
  colors: Array<string>
}>()

const colorToEmit = defineEmits({ colorCode: String })

function sendColor(colorCode: string) {
  colorToEmit('colorCode', colorCode)
}

const title = 'Config your new bottle'
const backText = 'Return to previous Step'
</script>

<template>
  <div class="titles">
    <TitleComponent :title="title" :color="'#023047'" />
    <SubTitleComponent :sub-title="currentSetupBottle.subTitle" />
  </div>
  <div class="color-container">
    <CardColorComponent
      v-for="color in colors"
      v-bind:key="color"
      :color-code="color"
      @color-code="sendColor"
    />
  </div>
  <div class="btn-container">
    <ButtonComponent v-if="!isFirstStep" :text="backText" :btn-router="prevBtnRouter" />
    <ButtonComponent
      :text="currentSetupBottle.text"
      :btn-router="currentSetupBottle.btnRouter"
    />
  </div>
</template>

<style scoped>
.color-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin: 1.125rem 0;
}

.btn-container {
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
}

@media (width < 1280px) {
  .titles {
    grid-area: title;
  }

  .btn-container {
    grid-area: button;
    flex-wrap: wrap;
  }

  .color-container {
    grid-area: color;
    width: clamp(80%, 80vw, 100%);
    margin: 1.75rem 0;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
}
</style>
