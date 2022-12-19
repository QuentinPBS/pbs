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
            <label v-if="v$.email.$error" class="label">
              <span class="label-text-alt text-red-400">{{
                v$.email.$errors[0].$message
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
  name: "Login",

  setup() {
    const state = reactive({
      email: "",
      isLoading: false,
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
    handleLoginClick: async function () {
      this.v$.$validate();
      if (this.v$.$error) return;
      try {
        this.state.isLoading = true;
        const response = UserService.resetPasswordUser(this.state.email);

        console.log(response);

        if (response.status === 200) {
        }
      } catch (e) {
        console.error("ici", e);
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