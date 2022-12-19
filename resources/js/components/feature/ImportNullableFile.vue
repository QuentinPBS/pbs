<template>
  <div>
    <!-- <label
      for="website"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Dropbox URL</label
    >
    <input
      type="url"
      id="website"
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
      placeholder="flowbite.com"
      v-model="state.link"
      required
    />
    <label v-if="v$.link.$error" class="label">
      <span class="label-text-alt text-red-400">{{
        v$.link.$errors[0].$message
      }}</span>
    </label> -->
  </div>

  <div class="flex justify-end py-4">
    <button class="btn bg-red-500 text-white mr-2" @click="$emit('closeModal')">
      {{$t('cancel')}}
    </button>
    <button
      :class="[{ loading: state.isLoading }, 'btn bg-green-500 text-white']"
      @click="uploadFile()"
    >
           {{$t('feature.step.validate')}}
    </button>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

import featureDeliveryService from "../../services/featureDeliveryService.js";
export default {
  props: ["feature"],
  setup() {
    const state = reactive({
      type: 3,
      file: null,
      isLoading: false,
    });

    return {
      state,
    };
  },

  methods: {
    async uploadFile() {
      this.state.isLoading = true;
      try {
        
        let body = new FormData();
        body.append("id", this.feature.id);
        body.append("type", this.state.type);
        body.append("user_id", this.$store.state.userStore.user.id);
        body.append("file", this.state.file);
        
        const response =
          await featureDeliveryService.importDeliveryNullableFile(body);
        if (response.status === 201) {
          this.$emit("fileDelivered");
        }
      } catch (error) {
        this.state.isLoading = false;
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>