import type { ISetupConfig } from '@/models/interfaces/setupConfigBottle.interface'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useStatoAvanzamentoStore = defineStore('statoAvanzamento', () => {
  const currentStep: Ref<ISetupConfig | undefined> = ref()
  const isStarted: Ref<boolean> = ref(false)
  const isCompleted: Ref<boolean> = ref(false)

  function startFlow() {
    isStarted.value = true
  }

  function updateStep(step: ISetupConfig) {
    currentStep.value = step
  }

  function completeFlow() {
    isCompleted.value = true
  }

  function resetFlow() {
    isCompleted.value = false
    isStarted.value = false
    currentStep.value = undefined
  }

  return { startFlow, updateStep, completeFlow, resetFlow, isCompleted }
})
