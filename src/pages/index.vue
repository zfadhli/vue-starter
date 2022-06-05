<script setup>
  const name = $ref('')
  const nameUpperCase = computed(() => name.toUpperCase())
</script>

<template>
  <div class="container">
    <section class="section">
      <h1 class="text-6xl font-bold">Vue Starter</h1>
      <p>{{ nameUpperCase }}</p>
      <input type="text" placeholder="Enter name" v-model="name" />
    </section>
  </div>
</template>
