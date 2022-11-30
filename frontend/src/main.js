import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadScript from 'vue-plugin-load-script'

createApp(App).use(store).use(router).use(loadScript).mount('#app')
