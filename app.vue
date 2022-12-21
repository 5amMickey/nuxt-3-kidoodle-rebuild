<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }
</style>
