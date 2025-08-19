import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import App from "@/App.vue";
import i18n from "@/i18n.js";
import {createPinia} from "pinia";
import {Button, Dialog} from "primevue";
import {Form} from "@primevue/forms";
import router from "@/app/router/index.js";


const app = createApp(App)

app.use(PrimeVue, {
    theme:{
        preset: Material
    }
})
app.use(createPinia())
app.use(i18n)
app.use(router)
app.use('v-form', Form)

app.mount('#app')
