<template>
  <div v-if="hasError" class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold">Sorry.. there was an error 😥</h1>
    <button @click="reloadPage" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
      Reload Page
    </button>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";

const hasError = ref(false);

onErrorCaptured((error, instance, info) => {
  console.error("Uncaught error:", error, info);
  hasError.value = true;
  return false; // Prevent the error from propagating further
});

const reloadPage = () => {
  window.location.reload();
};
</script>

<style scoped>
/* Optional styles */
</style>
