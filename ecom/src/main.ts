import './tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
// Retrieve french translations
import localFr from '@/trans/locale-fr'

const i18n = createI18n({
  locale: 'fr',
  messages: {
    fr: localFr
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
