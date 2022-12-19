<template>
  <label
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    >{{ $t("feature.step.type_of_receipt") }}</label
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
    <option selected value="" disabled>
      {{ $t("feature.step.select_receipt_type") }}
    </option>
    <option value="1">{{ $t("feature.step.link") }}</option>
    <option value="2">{{ $t("feature.step.file") }}</option>
    <option value="3">{{ $t("feature.step.no_delivrable_needed") }}</option>
  </select>
  <div class="mt-4">
    <ImportLink
      v-if="state.type == 1"
      :feature="feature"
      v-on:linkDelivered="linkDelivered()"
      v-on:closeModal="$emit('closeModal')"
    />
    <ImportFile
      v-if="state.type == 2"
      :feature="feature"
      v-on:fileDelivered="fileDelivered()"
      v-on:closeModal="$emit('closeModal')"
    />

    <ImportNullableFile
      v-if="state.type == 3"
      :feature="feature"
      v-on:fileDelivered="fileDelivered()"
      v-on:closeModal="$emit('closeModal')"
    />
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

import ImportLink from "../feature/ImportLink.vue";
import ImportFile from "../feature/ImportFile.vue";
import ImportNullableFile from "../feature/ImportNullableFile.vue";
export default {
  props: ["feature"],
  setup() {
    const state = reactive({
      showModal: true,
      isLoading: true,
      type: "",
    });
    return {
      state,
    };
  },
  computed: {},
  components: {
    ImportLink,
    ImportFile,
    ImportNullableFile,
  },

  methods: {
    linkDelivered() {
      this.$emit("linkDelivered");
    },
    fileDelivered() {
      this.$emit("fileDelivered");
    },
  },
};
</script>

<style>
</style>