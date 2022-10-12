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

// optionally import default styles
import 'dropzone-vue/dist/dropzone-vue.common.css';
createApp(App)
.use(router)
.use(store)
.use(vfmPlugin)
.use(DropZone)
.mount('#app')