<template>
  <div class="devis" v-if="!state.isLoaded">
    <navbar />
    <breadcrumb
      :items="[
        { link: '/', name: 'Accueil' },
        {
          link: `/project/${state.devis.project.slug}`,
          name: `${state.devis.project.name}`,
        },
        {
          link: `/project/${state.devis.project.slug}/${state.devis.slug}`,
          name: `${state.devis.name}`,
        },
      ]"
    />
    <div class="wrapper">
      <div class="devis__content">
        <features-list
          :devis="state.devis"
          :features="state.features"
          :leadConversation="state.leadConversation"
          v-on:sendMessage="loadData()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import NavbarVue from "../components/Navbar.vue";
import BreadcrumbVue from "../components/Breadcrumb.vue";
import FeatureList from "../components/feature/FeatureList.vue";
import leadService from "../services/leadService";
import featuresService from "../services/featureService";
import leadConversationService from "../services/leadConversationService";
export default {
  name: "Devis",

  components: {
    navbar: NavbarVue,
    breadcrumb: BreadcrumbVue,
    "features-list": FeatureList,
  },

  setup() {
    const state = reactive({
      devis: null,
      features: null,
      leadConversation: null,
      isLoaded: true,
    });

    return {
      state,
    };
  },

  created() {
    this.state.isLoaded = true;
    this.loadData();
  },

  methods: {
    async loadData() {
     
      try {
        const slugDevis = this.$route.params.slugDevis;
        //List lead (devis) details
        const responseDevis = await leadService.getLeadBySlug(slugDevis);
        if (responseDevis.status === 200) {
          this.state.devis = responseDevis.data;
        }
        //list the steps of a lead (devis)
        const responseFeatures = await featuresService.getFeaturesByLeadId(
          this.state.devis.id
        );
        if (responseFeatures.status === 200) {
          this.state.features = responseFeatures.data;
        }

        //list messages of a lead (devis) conversation
        const responseLeadConversation =
          await leadConversationService.getLeadConversation(slugDevis);

        if (responseLeadConversation.status === 200) {
          this.state.leadConversation = responseLeadConversation.data.messages;
        }
      } catch (e) {
        if (e.response.status === 401) {
          this.$store.commit("SET_USER", null);
          this.$store.commit("SET_TOKEN", "");
          window.location.href = "/login";
        }
      } finally {
        this.state.isLoaded = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.devis {
  background-color: #eff0f2;
  height: 100vh;

  &__content {
    @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
  }
}
</style>