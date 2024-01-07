import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const emitter = mitt()
const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(vuetify).mount('#app')
