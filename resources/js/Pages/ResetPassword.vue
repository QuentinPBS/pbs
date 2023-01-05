<template>
  <div>
    <div class="flex justify-end py-4 px-4">
      <LangSwitch />
    </div>
    <div class="login">
      <div class="login__block">
        <h1 class="login__title">
          {{ $t("forgot_password.forgot_password") }}
        </h1>
        <div class="login__form">
          <div v-if="state.success" class="alert alert-success my-5">
            <div>
              <span>{{ $t("forgot_password.success") }}</span>
            </div>
          </div>

          <div class="form-control w-full">
            <label class="label">Email</label>
            <input
              type="text"
              v-on:keyup.enter="handleLoginClick"
              :class="[
                { 'input-error': v$.email.$error },
                'input input-bordered rounded-md w-full',
              ]"
              v-model="state.email"
            />
            <label v-if="state.errors?.email" class="label">
              <span class="label-text-alt text-red-400">{{
                state.errors.email.join(", ")
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
                  : $t("forgot_password.reset_password")
              }}
            </button>
          </div>
        </div>
        <div class="divider">{{ $t("forgot_password.or") }}</div>
        <p>
          <router-link class="underline text-primary" to="/login">
            {{ $t("forgot_password.sign_in") }}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import UserService from "../services/userService";
import LangSwitch from "../components/LangSwitch.vue";
export default {
  name: "Reset Password",

  setup() {
    const state = reactive({
      email: "",
      isLoading: false,
      success: false,
      errors: {},
    });

    const rules = computed(() => {
      return {
        email: { required, email },
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
      try {
        this.state.isLoading = true;
        const response = await UserService.resetPasswordUser(
          this.state.email,
          this.$i18n.locale
        );

        if (response.success) {
          this.state.errors = false;
          this.state.success = true;
        }
      } catch (e) {
        this.state.success = false;
        this.state.errors = e.response.data.errors;
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