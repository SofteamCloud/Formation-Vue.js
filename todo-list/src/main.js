import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import AInput from '@/components/atoms/AInput.vue'
import './tailwind.css'

const app = createApp(App)

app.config.warnHandler = (err) => {
  console.log(err);
};

app.use(createPinia())

app.component('AInput', AInput)

app.mount('#app')
