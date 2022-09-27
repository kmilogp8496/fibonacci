<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-close inline-block />
    </div>
    <p>
      Lo siento, has perdido.
    </p>

    <p text-sm opacity-75>
      Has introducido un valor incorrecto, esfuérzate para la próxima.
    </p>

    <div>
      <button btn m="3 t6" text-sm @click="router.back()">
        Volver a jugar
      </button>
    </div>
  </div>
</template>
