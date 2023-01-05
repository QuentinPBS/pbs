<template>
  <div v-if="state.success" class="alert alert-success my-5">
    <div>
      <span>{{ $t("password_update.success") }}</span>
    </div>
  </div>
  <div>
    <div class="form-control w-full mb-5">
      <label class="label">{{ $t("profile.password") }}</label>
      <input
        type="password"
        :class="[
          { 'input-error': v$.password.$error },
          'input input-bordered rounded-md w-full',
        ]"
        v-model="state.password"
      />
      <label v-if="state.errors?.password" class="label">
        <span class="label-text-alt text-red-400">{{
          state.errors.password.join(", ")
        }}</span>
      </label>
    </div>
    <div class="form-control w-full mb-5">
      <label class="label">{{ $t("profile.password_confirmation") }}</label>
      <input
        type="password"
        :class="[
          { 'input-error': v$.password_confirmation.$error },
          'input input-bordered rounded-md w-full',
        ]"
        v-model="state.password_confirmation"
      />
      <label v-if="state.errors?.password_confirmation" class="label">
        <span class="label-text-alt text-red-400">{{
          state.errors.password_confirmation.join(", ")
        }}</span>
      </label>
    </div>
    <div class="form-control w-full mt-6">
      <button
        @click="handleChangePassword"
        :class="[{ loading: state.isLoading }, 'btn btn-primary']"
      >
        {{ state.isLoading ? $t("loading") : $t("profile.edit_password") }}
      </button>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { computed, reactive } from "vue";
import userService from "../../services/userService";

export default {
  name: "FormUpdatePassword",

  setup() {
    const state = reactive({
      password: "",
      password_confirmation: "",
      isLoading: false,
      success: false,
      errors: {},
    });

    const rules = computed(() => {
      return {
        password: required,
        password_confirmation: {
          required,
          validate: (value) => value === state.password,
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },

  methods: {
    async handleChangePassword() {
      try {
        const response = await userService.updatePassword(
          {
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          },
          this.$i18n.locale
        );
        this.state.errors = {};
        this.state.success = true;
        // this.state.errors = {};
      } catch (e) {
        this.state.success = false;
        this.state.isLoading = false;
        this.state.errors = e.response.data.errors;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>