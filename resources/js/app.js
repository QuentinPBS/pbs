require('./bootstrap');

import { createApp } from 'vue'
import middleware from "@grafikri/vue-middleware"
import VueRouterMetaTags from '@bachdgvn/vue-router-meta-tags';
import { vfmPlugin } from 'vue-final-modal'

import router from './Router/index'
import store from './Store/index'
import App from './App.vue'

router.beforeEach(middleware({ store }))
router.beforeEach(VueRouterMetaTags.update);
import DropZone from 'dropzone-vue';
import { createI18n } from 'vue-i18n'

// optionally import default styles
import 'dropzone-vue/dist/dropzone-vue.common.css';


// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property

import messages from "./lang.json"

// 2. Create i18n instance with options
 const i18n = createI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})



createApp(App)
    .use(router)
    .use(store)
    .use(vfmPlugin)
    .use(DropZone)
    .use(i18n)
    .mount('#app')