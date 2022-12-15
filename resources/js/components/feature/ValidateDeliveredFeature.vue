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
      <a @click.prevent="downloadFile()" class="btn bg-blue-500 text-white"
        >Télécharger</a
      >
    </div>
  </div>

  <div v-if="isNullable">
    <p class="my-5 mb-2">Pas de livrable pour cette étape</p>
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
    isNullable() {
      if (this.state.delivery) {
        return this.state.delivery.type == 3;
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
    async downloadFile() {
      // this.state.isLoading = true;

      try {
        const response = await featureService.downloadFile(this.feature);

        if (response.status === 200) {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          let filename = response["headers"]["content-disposition"]
            .split("filename=")[1]
            .split(".")[0];
          let extension = response["headers"]["content-disposition"]
            .split(".")[1]
            .split(";")[0];

          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("download", `${filename}.${extension}`);
          document.body.appendChild(fileLink);

          fileLink.click();
          // this.$emit("deliveryAccepted");
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