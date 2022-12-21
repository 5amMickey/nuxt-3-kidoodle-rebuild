<template>
  <header
    class="bg-violet-50 grid p-4 gap-4 grid-cols-3 items-center justify-between lg:container"
  >
    <div class="rounded-full flex bg-cool-gray-500 h-14 w-14">
      <span class="sr-only">Logo</span>
    </div>
    <AppSearch />
    <div class="flex gap-4 justify-end">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
    </div>
  </header>
</template>
