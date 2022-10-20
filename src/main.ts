import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import routes from 'voie-pages'

// import './style.css'
import App from './App.vue'

const app = createApp(App)
// const routes =
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

app.use(router)

app.mount('#app')

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
