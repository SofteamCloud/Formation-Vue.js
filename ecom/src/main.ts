import './tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import getPathLang from './helpers/locale'
// Retrieve french translations
import localFr from '@/trans/locale-fr'
import localEn from '@/trans/locale-en'
const messages = {
    fr: localFr,
    en: localEn
}

const app = createApp(App)

router.beforeEach((to, from, next) => {
  const locale = getPathLang(to.path)
  const i18n = createI18n({
    locale: locale,
    messages
  })
  app.use(i18n)

  next()
})


app.use(createPinia())
app.use(router)

app.mount('#app')
