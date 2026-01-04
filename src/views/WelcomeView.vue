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
  <div class="wrapper">
    <div class="info-container">
      <div class="title-container">
        <TitleComponent :title="title" :has-svg="true" />
        <p class="subtitle">Be ready for our new kids collection</p>
      </div>

      <div class="text-container">
        <p>
          Protecting our oceans and nature is at heart of everything we do. <br />That's why we
          creat sustainable beachwear from recycled materials.
        </p>
        <div class="skew-block">
          <p class="special">Next year our new kids collection launches!</p>
        </div>
        <p>
          To inspire the next generation, we'll gift a personalized thermal bottle with your first
          order.
        </p>
      </div>

      <ButtonComponent :text="btnText" :btn-router="btnRouter" />
    </div>
    <div class="image-container">
      <img src="../assets/svg/kids.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<style scoped>
.info-container,
.image-container {
  height: calc(100dvh - 4rem);
  padding: 2rem;
}

.image-container {
  display: flex;
  align-items: center;
}

.title-container {
  margin-bottom: 2rem;
}

.subtitle {
  color: #ffb703;
  font-weight: 600;
  font-size: clamp(1rem, 3.5vw, 1.125rem);
  position: absolute;
  left: 8%;
  top: 90%;
}

.text-container {
  margin: 1.5rem 0 0;
}

.text-container > p {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ced4da;
  margin: 1.125rem 0;
}

p.special {
  font-size: 1.5rem;
  color: #fb8500;
}

.skew-block {
  padding: 0 0.75rem;
  background-color: #023047;
  width: fit-content;
  transform: skewX(-15deg);
}

@media (width < 1280px) {
  .wrapper {
    grid-template-areas: 'title' 'image' 'text' 'button';
  }

  .info-container {
    display: contents;
  }

  .title-container {
    grid-area: title;
  }

  .image-container {
    grid-area: image;
    width: min(360px, 100%);
    padding: 0.5rem 0 0;
    height: fit-content;
  }

  .text-container {
    grid-area: text;
    text-align: center;
  }

  .skew-block {
    margin: 0 auto;
  }
}

@media (width < 640px) {
  p {
    text-align: left;
  }

  .subtitle {
    position: static;
  }
}
</style>
