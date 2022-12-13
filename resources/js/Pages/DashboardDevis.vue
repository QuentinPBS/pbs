<template>
    <div v-if="state.isLoaded"  class="dashboard">
        <navbar />
        <breadcrumb :items="[{link: '/devis', name: $t('quote')}]" />
        <div class="wrapper">
            <div class="dashboard__content">
                <project-client-list :projects="state.projects"  :invitation="state.invitation" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import UserService from '../services/userService';

import NavbarVue from '../components/Navbar.vue'
import BreadcrumbVue from '../components/Breadcrumb.vue';
import ProjectClientList from '../components/project/ProjectClientList.vue';
import projectService from '../services/projectService';
import inviteService from '../services/inviteService';
export default {
    name: 'DashboardDevis',

    components: {
        'navbar': NavbarVue,
        'breadcrumb': BreadcrumbVue,
        'project-client-list': ProjectClientList,
    },

    setup() {
        const state = reactive({
            isLoaded: false,
            projects: [],
            invitation: null
        });

        return {
            state
        }
    },

    async created() {
        try {
            const response = await UserService.getUserCurrent(this.$store.state.tokenStore.token);
            if (response.status === 200) this.$store.commit('SET_USER', response.data.data.item)

            const responseProjects = await projectService.getProjectsByClientId(this.$store.state.userStore.user.id);
            if (responseProjects.status === 200) this.state.projects = responseProjects.data

            const responseInvitation = await inviteService.getInvites(this.$store.state.userStore.user.email);
            if (responseInvitation.data.length > 0) this.state.invitation = responseInvitation.data

            this.state.isLoaded = true
        } catch (e) {
             if (e.response.status === 401) {
                this.$store.commit('SET_USER', null)
                this.$store.commit('SET_TOKEN', "")
                window.location.href = '/login'
            }
        } finally {
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