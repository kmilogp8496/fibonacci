<script setup lang="ts">

</script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none">
      <div i="carbon-sun dark:carbon-moon" @click="toggleDark()" />
    </button>

    <RouterLink class="icon-btn mx-2" to="/about">
      <div i-carbon-dicom-overlay />
    </RouterLink>
  </nav>
</template>
