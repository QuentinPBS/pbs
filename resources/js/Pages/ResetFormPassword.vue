<template>
  <div class="flex justify-end py-4 px-4">
    <LangSwitch />
  </div>
  <div class="login">
    <div class="login__block">
      <h1 class="login__title">{{ $t("forgot_password.new_password") }}</h1>
      <div class="login__form">
        <div v-if="state.success" class="alert alert-success my-5">
          <div>
            <span>{{ $t("forgot_password.updated") }}</span>
          </div>
        </div>
        <div v-if="state.error !== ''" class="alert alert-error shadow-xs">
          <div>
            <span>{{ $t("error") }}</span>
          </div>
        </div>
        <div class="form-control w-full mb-5">
          <label class="label">{{ $t("sign_up.password") }}</label>
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
          <label class="label">{{ $t("sign_up.password_confirmation") }}</label>
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
            @click="handleLoginClick"
            :class="[{ loading: state.isLoading }, 'btn btn-primary']"
          >
            {{
              state.isLoading
                ? $t("loading")
                : $t("forgot_password.change_password")
            }}
          </button>
        </div>
      </div>
      <div class="divider">{{ $t("login.or") }}</div>
      <p>
        <router-link class="underline text-primary" to="/login">{{
          $t("login.sign_in")
        }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import UserService from "../services/userService";
import LangSwitch from "../components/LangSwitch.vue";

export default {
  name: "Login",

  setup() {
    const state = reactive({
      password: "",
      password_confirmation: "",
      isLoading: false,
      success: false,
      error: "",
      errors: {},
    });

    const rules = computed(() => {
      return {
        password: [required, minLength(6), maxLength(50)],
        password_confirmation: [required, minLength(6), maxLength(50)],
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },
  components: {
    LangSwitch,
  },
  methods: {
    async handleLoginClick() {
      //   this.v$.$validate();
      //   if (this.v$.$error) return;

      try {
        this.state.isLoading = true;
        this.state.success = false;
        const response = await UserService.resetFormPasswordUser(
          {
            email: this.$route.query.email,
            token: this.$route.query.token,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          },
          this.$i18n.locale
        );

        if (response.success) {
          this.state.errors = {};
          this.state.success = true;
        }
      } catch (e) {
        if (e.response.status === 400) {
          this.state.error = "Le token est invalide";
        } else if (e.response.status === 422) {
          this.state.errors = e.response.data.errors;
        }
      } finally {
        this.state.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.login {
  @apply flex w-screen h-screen items-center justify-center bg-white;

  &__block {
    width: 450px;
    @apply p-6;
  }

  &__title {
    @apply text-center text-3xl font-bold;
  }

  &__form {
    @apply w-full mt-12;
  }
}
</style>