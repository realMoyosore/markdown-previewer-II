<template>
  <div>
    <h1>Error Test Page</h1>
    <p>This page intentionally throws an error to test error handling.</p>
  </div>
</template>

<script setup lang="ts">
// Intentionally throw an error to test error boundaries
throw new Error("This is a test error from ErrorTestPage component.");
</script>

<style scoped>
/* Optional styles */
</style>