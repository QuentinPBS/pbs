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
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const state = reactive({
      type: 1,
      link: "",
    });

    return {
      state,
    };
  },
};
</script>

<style>
</style>