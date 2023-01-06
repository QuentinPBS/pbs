<template>
  <div>
    <div class="flex justify-end py-4 px-4">
      <LangSwitch />
    </div>

    <div class="register">
      <div class="register__block">
        <h1 class="register__title">{{ $t("sign_up.sign_up") }}</h1>
        <div class="register__form">
          <div v-if="state.isSuccess" class="alert alert-success shadow-sm">
            <div>
              <span>{{ $t("email.confirm_email") }}</span>
            </div>
          </div>
          <div v-if="state.isError" class="alert alert-error shadow-sm">
            <div>
              <span>{{ state.errorMessage }}</span>
            </div>
          </div>
          <div class="form-control w-full mb-5">
            <label class="label">{{ $t("sign_up.im") }}</label>
            <select
              v-model="state.status"
              @change="handleStatusChange"
              class="select select-bordered w-full"
            >
              <option value="individual" selected>
                {{ $t("sign_up.particular") }}
              </option>
              <option value="professional">
                {{ $t("sign_up.professional") }}
              </option>
            </select>
            <label v-if="state.errors?.status" class="label">
              <span class="label-text-alt text-red-400">{{
                state.errors.status.join(", ")
              }}</span>
            </label>
          </div>
          <div class="register__form__flex">
            <div class="form-control w-full mb-5">
              <label class="label">{{ $t("sign_up.last_name") }}</label>
              <input
                type="text"
                :class="[
                  { 'input-error': v$.lastname.$error },
                  'input input-bordered rounded-md w-full',
                ]"
                v-model="state.lastname"
              />
              <label v-if="state.errors?.lastname" class="label">
                <span class="label-text-alt text-red-400">{{
                  state.errors.lastname.join(", ")
                }}</span>
              </label>
            </div>
            <div class="form-control w-full mb-5">
              <label class="label">{{ $t("sign_up.first_name") }}</label>
              <input
                type="text"
                :class="[
                  { 'input-error': v$.firstname.$error },
                  'input input-bordered rounded-md w-full',
                ]"
                v-model="state.firstname"
              />
              <label v-if="state.errors?.firstname" class="label">
                <span class="label-text-alt text-red-400">{{
                  state.errors.firstname.join(", ")
                }}</span>
              </label>
            </div>
          </div>
          <div class="form-control w-full mb-5">
            <label class="label">Email</label>
            <input
              type="text"
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
          <div class="register__form__flex" v-show="state.isProfessional">
            <div class="form-control w-full mb-5">
              <label class="label">{{ $t("sign_up.activity_sector") }}</label>
              <input
                type="text"
                :class="[
                  { 'input-error': v$.area.$error },
                  'input input-bordered rounded-md w-full',
                ]"
                v-model="state.area"
              />
              <label v-if="state.errors?.area" class="label">
                <span class="label-text-alt text-red-400">{{
                  state.errors.area.join(", ")
                }}</span>
              </label>
            </div>
            <div class="form-control w-full mb-5">
              <label class="label">{{ $t("sign_up.siren") }}</label>
              <input
                type="text"
                :class="[
                  { 'input-error': v$.siren.$error },
                  'input input-bordered rounded-md w-full',
                ]"
                v-model="state.siren"
              />
              <label v-if="state.errors?.siren" class="label">
                <span class="label-text-alt text-red-400">{{
                  state.errors.siren.join(", ")
                }}</span>
              </label>
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
            <label class="label">{{
              $t("sign_up.password_confirmation")
            }}</label>
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
              @click="handleRegisterClick"
              :class="[{ loading: state.isLoading }, 'btn btn-primary']"
            >
              {{ state.isLoading ? $t("loading") : $t("sign_up.sign_up") }}
            </button>
          </div>
        </div>
        <div class="divider">{{ $t("sign_up.or") }}</div>
        <p>
          {{ $t("sign_up.already_an_account") }}
          <router-link class="underline text-primary" to="/login">{{
            $t("login.sign_in")
          }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

import { APISettings } from "../api/config";
import LangSwitch from "../components/LangSwitch.vue";
export default {
  name: "Register",

  setup() {
    const state = reactive({
      lastname: "",
      firstname: "",
      email: "",
      area: "",
      siren: "",
      password: "",
      password_confirmation: "",
      status: "individual",
      isLoading: false,
      isProfessional: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
      errors: {},
    });

    const rules = computed(() => {
      return {
        status: [required],
        lastname: [required],
        firstname: [required],
        email: [required, email],
        password: [required, minLength(6), maxLength(50)],
        password_confirmation: [required, minLength(6), maxLength(50)],
        area: [minLength(5), maxLength(5)],
        siren: [minLength(9), maxLength(9)],
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
  watch : {
    'state.status'(val)  {
      this.state.errors = {}
    }
  },
  methods: {
    handleStatusChange: function () {
      this.state.isProfessional = this.state.status === "professional";
    },

    handleRegisterClick: async function () {
      this.state.isSuccess = false;
      this.state.isError = false;
      this.state.errorMessage = "";

      // this.v$.$validate();
      // if (this.v$.$invalid) return;

      try {
        this.state.isLoading = true;
        const response = await axios.post(
          APISettings.baseURL + "/register",
          {
            status: this.state.status,
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            email: this.state.email,
            siren: this.state.siren,
            area: this.state.area,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
          },
          {
            headers: {
              locale: this.$i18n.locale,
            },
          }
        );

        if (response.status === 200) {
          this.state.isSuccess = true;
          this.state.errors = {};
        }
      } catch (e) {
        
        this.state.errors = e.response.data.errors;
      } finally {
        this.state.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.register {
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

    &__flex {
      @apply flex  gap-3;
    }
  }
}
</style>