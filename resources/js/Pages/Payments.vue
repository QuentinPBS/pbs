<template>
  <div class="devis" v-if="!state.isLoaded">
    <navbar />
    <breadcrumb
      :items="[
        { link: '/', name: 'Accueil' },
        {
          link: '/payments',
          name: 'Mes paiements',
        }
      ]"
    />
    <div class="wrapper">
      <div class="devis__content">
          <div class="devis-list">
              <div class="grid grid-cols-1 gap-6">
                  <div class="devis-list__content">
                      <div class="devis-list__content__item" v-if="state.payments">
                          <div
                              class="
             w-full
              bg-gray-100
              text-left
              flex
              justify-between
              items-center
              rounded
              shadow-md
              p-3
            "
                              v-for="(payment, key) in state.payments"
                              :key="key"
                          >
                              <div class="flex gap-3 items-center">
                                  <div class="p-2 bg-secondary text-white rounded font-bold">
                                      {{ payment.amount }}€
                                  </div>
                                  <div>
                                      <div class="text-lg">{{ payment.project.name }}</div>
                                      <div class="text-sm">
                                          <span class="font-bold">Etape</span>:
                                          {{ payment.feature.name }}
                                      </div>
                                  </div>
                              </div>
                              <div class="flex">
                                  <div>
                                    <span class="text-secondary text-sm" v-if="isOwner(payment)">Paiement reçu</span>
                                    <span class="text-secondary text-sm" v-else>Paiement envoyé</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
                          <img src="/images/logo_b&w.png" alt="logo paybystep" />
                          <p class="text-xl font-bold">Vous n'avez aucun paiement</p>
                      </div>
                  </div>
              </div>
          </div>
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
import paymentService from "../services/paymentService";
export default {
  name: "Payments",

  components: {
    navbar: NavbarVue,
    breadcrumb: BreadcrumbVue
  },

  setup() {
    const state = reactive({
      payments: null,
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
        const paymentsResponse = await paymentService.getUserPayments();
        if (paymentsResponse.status === 200) {
          this.state.payments = paymentsResponse.data;
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
      isOwner(payment) {
        return payment.owner_id === this.$store.state.userStore.user.id;
      }
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
