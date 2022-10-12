<template>
  <div class="modal__content py-4">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >Type de justificatif</label
    >
    <select
      class="
        bg-gray-50
        border border-gray-300
        text-gray-900 text-sm
        rounded-lg
        focus:ring-blue-500 focus:border-blue-500
        block
        w-full
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
      v-model="state.type"
    >
      <option selected value="" disabled>Selectionner le type de justificatif</option>
      <option value="1">Lien</option>
      <option value="2">Fichier</option>
    </select>
    <div class="mt-4">
      <ImportLink v-if="state.type == 1" />
      <ImportFile v-if="state.type == 2" />
    </div>
    <!-- <p class="my-5">
          Merci d'envoyer votre justificatif d'étape directement à votre client
          (mail, sms, whatsapp, pigeon voyageur, signal de fumée ...). Nous
          développons actuellement l'hébergement des preuves.
        </p> -->
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

import ImportLink from "../feature/ImportLink.vue";
import ImportFile from "../feature/ImportFile.vue";
export default {
  setup() {
    const state = reactive({
      showModal: true,
      isLoading: true,
      showImportLink: false,
      showImportFile: false,
      type: "",
    });
    return {
      state,
    };
  },
  computed: {
  
  },
  components: {
    ImportLink,
    ImportFile,
  },

  watch: {
    // whenever question changes, this function will run
    type(val) {
      if (val == 1) {
        this.state.showImportLink = true;
      }

      if (val == 2) {
        this.state.showImportFile = true;
      }
    },
  },
};
</script>

<style>
</style>