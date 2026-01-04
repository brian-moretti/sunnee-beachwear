<script setup lang="ts">
import DynamicBottleComponent from '@/components/DynamicBottleComponent.vue'
import DynamicConfigSetupComponent from '@/components/DynamicConfigSetupComponent.vue'
import { colors } from '@/config/colors'
import { setupConfig } from '@/config/setupConfigBottle'
import { Phases } from '@/models/enum/phases.enum'
import { Step } from '@/models/enum/step.enum'
import type { IBtnRouter } from '@/models/interfaces/btnRouter.interface'
import type { ISetupConfig } from '@/models/interfaces/setupConfigBottle.interface'
import { useStatoAvanzamentoStore } from '@/stores/statoAvanzamento'
import { normalizaParamsRouter } from '@/utilities/normalizaParamsRouter'
import { onBeforeMount, onMounted, reactive, ref, watch, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const setupConfigBottle = setupConfig
const currentPhase: Ref<Phases | undefined> = ref()
let currentSetupBottle: ISetupConfig = reactive({
  id: 0,
  step: '',
  title: '',
  subTitle: '',
  text: '',
  btnRouter: {},
})
const prevBtnRouter: Ref<IBtnRouter> = ref({})

const isFirstStep = ref(false)

const cardColors = colors
const capColor = ref('#E5E5E5')
const bodyColor = ref('#E5E5E5')
const bottomColor = ref('#E5E5E5')

const statoAvanzamento = useStatoAvanzamentoStore()

onBeforeMount(() => {
  setupSteps()
})

onMounted(() => {
  statoAvanzamento.startFlow()
  statoAvanzamento.updateStep(currentSetupBottle)
})

function setupSteps(newParamId?: string, oldParamId?: string) {
  const id = newParamId || normalizaParamsRouter(route.params.id)
  if (!id) return router.push({ name: 'welcome' })

  currentPhase.value = getPhaseFromParam(id)
  const currentConfig = currentPhase.value && setupConfigBottle[currentPhase.value]

  if (!currentConfig) return router.push({ name: 'welcome' })

  currentSetupBottle = currentConfig
  isFirstStep.value = currentPhase.value === Phases.PHASE_ONE

  if (oldParamId) {
    const prevPhase = getPhaseFromParam(oldParamId)
    const prevConfig = prevPhase && setupConfigBottle[prevPhase]
    prevBtnRouter.value = prevConfig ? setPrevRouter(prevConfig.btnRouter, oldParamId) : {}
  }
}

function getPhaseFromParam(id: string) {
  switch (id) {
    case '1':
      return Phases.PHASE_ONE
    case '2':
      return Phases.PHASE_TWO
    case '3':
      return Phases.PHASE_THREE
    default:
      return undefined
  }
}

function setupColorBottle(colorCode: string) {
  const step = currentPhase.value && setupConfigBottle[currentPhase.value]?.step
  switch (step) {
    case Step.CAP:
      capColor.value = colorCode
      break
    case Step.BODY:
      bodyColor.value = colorCode
      break
    case Step.BOTTOM:
      bottomColor.value = colorCode
      break
  }
}

function setPrevRouter(prevConfigRouter: IBtnRouter, oldId: string) {
  return {
    ...prevConfigRouter,
    params: { id: oldId },
  }
}

watch(
  () => route.params.id,
  (newId) => {
    newId = normalizaParamsRouter(newId)
    const oldId = normalizaParamsRouter((Number(newId) - 1).toString())
    setupSteps(newId, oldId)
  },
)
</script>

<template>
  <div class="wrapper">
    <div class="container-setup">
      <DynamicConfigSetupComponent
        :is-first-step="isFirstStep"
        :current-setup-bottle="currentSetupBottle"
        :prev-btn-router="prevBtnRouter"
        :colors="cardColors"
        @color-code="setupColorBottle"
      />
    </div>
    <div class="container-bottle">
      <DynamicBottleComponent
        :cap-color="capColor"
        :body-color="bodyColor"
        :bottom-color="bottomColor"
      />
    </div>
  </div>
</template>

<style scoped>
.container-bottle {
  height: calc(100dvh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  margin-left: 10px;
  padding: 3rem;
  perspective: 800px;
}

.container-bottle:hover svg {
  transform: rotateY(-4deg) rotateX(2deg) scale(1.02);
}

.container-setup {
  margin-right: 10px;
  padding: 3rem;
  height: calc(100dvh - 4rem);
  background-color: #f8f9fa;
}

@media (width < 1280px) {
  .wrapper {
    grid-template-areas: 'title' 'color' 'bottle' 'button';
  }

  .container-bottle {
    grid-area: bottle;
    margin: 0;
    height: auto;
    padding: 0;
    background: none;
    box-shadow: none;
  }
}
</style>
