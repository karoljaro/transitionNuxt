// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Transition Test.' },
        { name: "robots", content: "noindex" },
      ],
      title: 'Transition',
      htmlAttrs: {
        lang: 'pl'
      }
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/scss/default.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/utils.scss";'
        }
      }
    }
  },
  imports: {
    dirs: ['store', 'utils', 'animations']
  }
})
