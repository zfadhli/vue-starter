<script setup>
  useTitle('Vue Starter')
</script>

<template>
  <div class="w-full min-h-screen antialiased text-slate-900 bg-slate-50 font-inter">
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
