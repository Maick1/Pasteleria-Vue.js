import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)

// Usando las instancias de router, store y vuetify
app.use(router)
app.use(store)
app.use(vuetify)

// Usando la instancia de Pinia
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
