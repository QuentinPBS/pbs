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

createApp(App).use(router).use(store).use(vfmPlugin).mount('#app')