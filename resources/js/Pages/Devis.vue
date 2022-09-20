<template>
    <div class="devis" v-if="!state.isLoaded">
        <navbar />
        <breadcrumb :items="[{link: '/', name: 'Accueil'}, {link: `/project/${state.devis.project.slug}`, name: `${state.devis.project.name}`}, {link: `/project/${state.devis.project.slug}/${state.devis.slug}`, name: `${state.devis.name}`}]" />
        <div class="wrapper">
            <div class="devis__content">
                <features-list :devis="state.devis" :features="state.features" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

import NavbarVue from '../components/Navbar.vue'
import BreadcrumbVue from '../components/Breadcrumb.vue';
import FeatureList from '../components/feature/FeatureList.vue';
import leadService from '../services/leadService';
import featuresService from '../services/featureService';

export default {
    name: 'Devis',

    components: {
        'navbar': NavbarVue,
        'breadcrumb': BreadcrumbVue,
        'features-list': FeatureList,
    },

    setup() {
        const state = reactive({
            devis: null,
            features: null,
            isLoaded: true
        });

        return {
            state
        }
    },

    async created() {
        this.state.isLoaded = true
        try {
            const slugDevis = this.$route.params.slugDevis;
            
            const responseDevis = await leadService.getLeadBySlug(slugDevis)
            if (responseDevis.status === 200) this.state.devis = responseDevis.data;

            const responseFeatures = await featuresService.getFeaturesByLeadId(this.state.devis.id);
            if (responseFeatures.status === 200) this.state.features = responseFeatures.data;
        } catch(e) {
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
.devis {
    background-color: #EFF0F2;
    height: 100vh;

    &__content {
        @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
    }
}
</style>