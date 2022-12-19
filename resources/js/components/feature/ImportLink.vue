<template>
  <div>
    <label
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
    </label>
  </div>

  <div class="flex justify-end py-4">
    <button class="btn bg-red-500 text-white mr-2" @click="$emit('closeModal')">
      {{$t('cancel')}}
    </button>
    <button
      :class="[{ loading: state.isLoading }, 'btn bg-green-500 text-white']"
      @click="uploadLink()"
    >
      {{$t('feature.step.validate')}}
    </button>
  </div>
</template>

<script>
import { reactive, computed } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, url } from "@vuelidate/validators";
import featureDeliveryService from "../../services/featureDeliveryService.js";
export default {
  props: ["feature"],
  setup() {
    const state = reactive({
      type: 1,
      link: "",
      isLoading: false,
    });
    const rules = computed(() => {
      return {
        link: { required, url },
      };
    });
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$,
    };
  },

  methods: {
    async uploadLink() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      this.state.isLoading = true;
      try {
        let body = new FormData();
        body.append("id", this.feature.id);
        body.append("type", 1);
        body.append("user_id", this.$store.state.userStore.user.id);
        body.append("link", this.state.link);
        const response = await featureDeliveryService.importDeliveryLink(body);
        if (response.status === 201) {
          this.$emit("linkDelivered");
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