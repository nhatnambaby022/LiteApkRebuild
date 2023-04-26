import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config"
import {createStore} from "vuex"
import storeConfig from './store'

const store = createStore(storeConfig)
createApp(App).use(router).use(PrimeVue).use(store).mount('#app')
