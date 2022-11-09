<template>
  <div v-if="isLink">
    <p class="my-5 mb-2">
      Merci de cliquer sur le lien ci dessous pour vérifier le délivrable
    </p>
    <div class="flex justify-center mb-4">
      <a
        :href="state.delivery.link"
        class="text-blue-500 text-center underline break-all"
           target="_blank"
        >{{ state.delivery.link }}</a
      >
    </div>
  </div>
  <div v-if="isFile">
    <p class="my-5 mb-2">
      Merci de cliquer sur le bouton ci dessous pour vérifier le délivrable
    </p>
    <div class="flex justify-center mb-4">
      <a
        :href="`/api/feature/${feature.id}/file/download`"
        class="btn bg-blue-500 text-white"
     
        >Télécharger</a
      >
    </div>
  </div>
  <div class="flex justify-end">
    <button @click="$emit('closeModal')" class="btn bg-red-500 text-white mr-2">
      Annuler
    </button>
    <button
      @click="approvedIsDelivry()"
      :class="[{ loading: state.isLoading }, 'btn btn-primary']"
    >
      Accepter
    </button>
  </div>
</template>

<script>
import { reactive, computed } from "@vue/reactivity";

import featureService from "../../services/featureService";
import featureDeliveryService from "../../services/featureDeliveryService";
export default {
  props: ["feature"],

  created() {
    this.loadData();
  },
  setup() {
    const state = reactive({
      delivery: null,
      isLoading: false,
    });

    return {
      state,
    };
  },
  computed: {
    isFile() {
      if (this.state.delivery) {
        return this.state.delivery.type == 2;
      }
    },
    isLink() {
      if (this.state.delivery) {
        return this.state.delivery.type == 1;
      }
    },
  },
  methods: {
    async loadData() {
      try {
        const response = await featureDeliveryService.fetchFeatureDelivery(
          this.feature
        );
        if (response.status === 200) {
          this.state.delivery = response.data.featureDelivery;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async approvedIsDelivry() {
      this.state.isLoading = true;
      try {
        const response = await featureService.updateStepfour(this.feature);
        if (response.status === 200) {
          this.$emit("deliveryAccepted");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>