import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import { tokenStore } from './module/token'
import { userStore } from './module/user'
import { projectStore } from './module/project'

const dataState = createPersistedState({
    paths: ['tokenStore', 'userStore']
})

const store = new Vuex.Store({
    modules: {
        tokenStore,
        userStore,
        projectStore
    },

    plugins: [dataState],
})

export default store