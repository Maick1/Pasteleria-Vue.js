import { createApp } from 'vue'

//importamos libreria Pinia
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')

  const pinia = createPinia()
  const app = createApp(App)
  
  app.use(pinia)

  