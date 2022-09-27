<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-dicom-overlay inline-block />
    </div>
    <p>
      Sucesión de Fibonacci
    </p>

    <p text-sm opacity-75>
      Juego de prueba para el cuestionario de VueJS
    </p>

    <div>
      <button btn m="3 t6" text-sm @click="router.push('/')">
        Quiero Jugar!
      </button>
    </div>
  </div>
</template>

