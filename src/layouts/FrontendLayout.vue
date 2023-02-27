<template>
    <main>
      <FrontendNav />
      <router-view />
      <FrontendFoot />

    </main>

</template>

<script setup lang="ts">
import FrontendFoot from '../components/frontend/FrontendFoot.vue';
import FrontendNav from '../components/frontend/FrontendNav.vue';




</script>

<style scoped>

</style>