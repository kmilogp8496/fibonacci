<script setup lang="ts">
import { useFibonacci } from '~/composables/useFibonacci'

const { nextValue, previousValues, validate } = useFibonacci()

const router = useRouter()

const onValidate = () => {
  if (!validate())
    router.push('/game-over')
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-character-whole-number inline-block />
    </div>
    <h2 class="text-2xl">
      Sucesión de Fibonacci
    </h2>
    <CHelpText class="mt-4">
      Después de los dos primeros números, 0 y 1, cada número sucesivo es la suma de los dos anteriores.
    </CHelpText>
    <div class="text-xl mt-8">
      ¿Te atreves a jugar?
    </div>
    <CHelpText class="mt-4">
      <p>
        Recuerda que la sucesión siempre comienza por 0 y 1.
      </p>
      <p>
        Los valores se van introduciendo de 1 a la vez.
      </p>
    </CHelpText>

    <div py-4 />

    <input
      id="input" v-model="nextValue" type="number" placeholder="Introduce el siguiente número"
      aria-label="Introduce el próximo número" autocomplete="false" p="x4 y2" w="300px" text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700" outline="none active:none" @keydown.enter="onValidate"
    >
    <label class="hidden" for="input">Sucesión de Fibonacci</label>

    <div>
      <CButton btn m-3 text-sm @click="onValidate">
        Comprobar
      </CButton>
    </div>

    <div class="text-xl mt-10">
      {{ previousValues.length ? 'Números introducidos' : 'No has introducido ningún número' }}
    </div>
    <CHelpText>
      {{ previousValues.join(', ') }}
    </CHelpText>
    <CHelpText v-show="previousValues.length">
      Vas Bien!
    </CHelpText>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
