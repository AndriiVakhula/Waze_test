import EventEmitter from './EventEmiter';
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);
app.config.globalProperties.$globalEvents = new EventEmitter();

app.mount('#app')
