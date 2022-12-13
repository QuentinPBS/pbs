<template>
    <div class="project" v-if="!state.isLoaded">
        <navbar />
        <breadcrumb  :items="[{link: '/', name: $t('home')}, {link: `/project/${state.project.slug}`, name: `${state.project.name}`}]" />
        <div class="wrapper">
            <div class="project__content">
                <devis-list :project="state.project" :devis="state.devis" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

import projectService from '../services/projectService';

import NavbarVue from '../components/Navbar.vue'
import BreadcrumbVue from '../components/Breadcrumb.vue';
import DevisListVue from '../components/devis/DevisList.vue';
import leadService from '../services/leadService';

export default {
    name: 'Project',

    components: {
        'navbar': NavbarVue,
        'breadcrumb': BreadcrumbVue,
        'devis-list': DevisListVue,
    },

    setup() {
        const state = reactive({
            isLoaded: true,
            project: null,
            devis: null
        });

        return {
            state
        }
    },

    async created() {
        
        try {
            const projectSlug = this.$route.params.slug;

            const response = await projectService.getProjectBySlug(projectSlug);
            if (response.status === 200) this.state.project = response.data;
            
            const responseLead = await leadService.getLeadByProjectId(this.state.project.id);
            if (responseLead.status === 200) this.state.devis = responseLead.data;
            
            console.error('ici', e)
        } catch (e) {
            if (e.response.status === 401) {
                this.$store.commit('SET_USER', null)
                this.$store.commit('SET_TOKEN', "")
                window.location.href = '/login'
            }
        } finally {
            this.state.isLoaded = false
        }
    }
}
</script>

<style lang="scss" scoped>
.project {
    background-color: #EFF0F2;
    height: 100vh;

    &__content {
        @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
    }
}
</style>