<template>
  <div class="flex flex-col h-screen items-center justify-between">
    <AppHeader />
    <main class="bg-blue-100 flex-1 lg:container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
