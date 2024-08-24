// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@formkit/auto-animate/nuxt',
        '@nuxtjs/seo',
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },
    colorMode: {
        classSuffix: '',
    },
    site: {
        url: 'https://shadcn-vue-phone-input.vercel.app/',
        name: 'Shadcn Vue Phone Input',
        description:
            'An implementation of a Phone Input component built on top of Shadcn UI input component.',
        defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    },
    ssr: false,
})
