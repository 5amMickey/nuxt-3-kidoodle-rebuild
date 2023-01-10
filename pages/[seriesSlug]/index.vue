<script setup>
  useHead({ titleTemplate: 'Watch %s on Kidoodle.TV' });

  const { data, error } = await useFetch(`/api/tv`, {
    pick: ['watch'],
    onResponse({ request, response, error }) {
      if (error) {
        console.error(error);
      }
      console.log('request', request);
      console.log('response', response);
    },
  });
</script>

<template>
  <section>
    <p>Series Page {{ $route.params.slug }}</p>
  </section>
</template>
