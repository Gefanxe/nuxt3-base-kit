// eslint-disable-next-line import/no-named-as-default
import presetIcons from '@unocss/preset-icons';

export default defineNuxtConfig({
  app: {
    head: {
      title: '我是網站',
      meta: []
    }
  },
  // 不分享數據給nuxt
  telemetry: false,
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    // https://github.com/huntersofbook/huntersofbook/tree/main/packages/naive-ui-nuxt
    '@huntersofbook/naive-ui-nuxt'
  ],
  build: {
    transpile: ['@headlessui/vue']
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block'
        }
      })
    ],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-turkey']
  },

  // localization - i18n config
  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: 'zh',
        file: 'zh-TW.json',
        iso: 'zh-TW',
        name: '繁體中文',
        flag: 'i-twemoji-flag-us-outlying-islands'
      },
      {
        code: 'en',
        file: 'en-US.json',
        iso: 'en-US',
        name: 'English',
        flag: 'i-twemoji-flag-us-outlying-islands'
      },
      {
        code: 'tr',
        file: 'tr-TR.json',
        iso: 'tr-TR',
        name: 'Turkce',
        flag: 'i-twemoji-flag-turkey'
      }
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales/',
    /*
      strategy 路由生成方式
      no_prefix: 不生成
      prefix_except_default: 所有路由都將添加一個區域設置前綴，默認語言除外
      prefix: 所有路由都將具有區域設置前綴
      prefix_and_default: 結合了之前的兩種策略行為，這意味著您將獲得帶有每種語言前綴的 URL，但默認語言的 URL 也將具有非前綴版本（儘管detectBrowserLanguage啟用時前綴版本將是首選。
    */
    strategy: 'prefix_except_default',
    // 要完全禁用瀏覽器的語言檢測功能，請設置detectBrowserLanguage為false
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'tr',
      fallbackLocale: 'tr',
      availableLocales: ['en', 'tr']
    }
  },

  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt']
      }
    }
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode'
  },

  tailwindcss: {
    configPath: './tailwind.config.ts'
  },

  vite: {
    logLevel: 'info'
  },

  runtimeConfig: {
    public: {
      apiBase: 'ggg'
    }
  }
});
