export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kidoodle.TV App Rebuild',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Kidoodle Rebuild.' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  modules: ['@pinia/nuxt', 'nuxt-windicss'],
});
