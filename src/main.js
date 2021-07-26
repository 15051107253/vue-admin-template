import { createApp } from 'vue'
import Router from './routes';
import Store from './store';
import App from './App.vue'

createApp(App)
.use(Router)
.use(Store)
.mount('#app')
