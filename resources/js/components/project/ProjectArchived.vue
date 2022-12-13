<template>
    <div v-if="state.isLoaded"  class="dashboard">
        <navbar />
        <breadcrumb :items="[{link: '/', name: $t('navbar.archive')}]" />
        <div class="wrapper">
            <div class="dashboard__content">
                <project-archived-list />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import UserService from '../../services/userService';

import NavbarVue from '../Navbar.vue'
import BreadcrumbVue from '../Breadcrumb.vue';
import ProjectArchivedList from '../project/ProjectArchivedList.vue';
import projectService from '../../services/projectService';
export default {
    name: 'Dashboard',

    components: {
        'navbar': NavbarVue,
        'breadcrumb': BreadcrumbVue,
        'project-archived-list': ProjectArchivedList,
    },

    setup() {
        const state = reactive({
            isLoaded: false,
            projects: []
        });

        return {
            state
        }
    },

    async created() {
        try {
            const response = await UserService.getUserCurrent(this.$store.state.tokenStore.token);
            
            if (response.status === 200) this.$store.commit('SET_USER', response.data.data.item)

            if (response.status === 401) {
                this.$store.commit('SET_USER', null)
                this.$store.commit('SET_TOKEN', null)
                window.location.href = '/login'
            }


            const responseProjects = await projectService.getProjectsByUserId(this.$store.state.userStore.user.id);
            if (responseProjects.status === 200) this.$store.commit('SET_PROJECT', responseProjects.data)
            
        } catch (e) {
            if (e.response.status === 401) {
                this.$store.commit('SET_USER', null)
                this.$store.commit('SET_TOKEN', "")
                window.location.href = '/login'
            }
        } finally {
            this.state.isLoaded = true
        }
    }
}


</script>

<style lang="scss">
.dashboard {
    background-color: #EFF0F2;
    height: 100vh;

    &__content {
        @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
    }
}
</style>