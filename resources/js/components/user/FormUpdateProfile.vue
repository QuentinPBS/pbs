<template>
  <div class="form-update-profile">
    <div class="form-update-profile__content">
      <div class="form-update-profile__content__title">
        <h1>{{ $t("profile.profile") }}</h1>
      </div>

      <div class="form-update-profile__content__separator">
        <div class="form-update-profile__content__form">
          <div v-if="state.success" class="alert alert-success my-5">
            <div>
              <span>{{ $t("profile.updated") }}</span>
            </div>
          </div>
          <form action="">
            <div class="form-control w-full mb-5">
              <label class="label">{{ $t("profile.im") }}</label>
              <select
                v-model="state.status"
                @change="handleStatusChange"
                class="select select-bordered w-full"
              >
                <option value="individual" selected>
                  {{ $t("profile.particular") }}
                </option>
                <option value="professional">
                  {{ $t("profile.professional") }}
                </option>
              </select>
              <label v-if="v$.status.$error" class="label">
                <span class="label-text-alt text-red-400">{{
                  v$.status.$errors[0].$message
                }}</span>
              </label>
            </div>
            <div class="register__form__flex">
              <div class="form-control w-full mb-5">
                <label class="label">{{ $t("profile.last_name") }}</label>
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
                <label class="label">{{ $t("profile.first_name") }}</label>
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
                class="input input-bordered rounded-md w-full"
                v-model="state.email"
                disabled
              />
            </div>
            <div class="register__form__flex" v-show="state.isProfessional">
              <div class="form-control w-full mb-5">
                <label class="label">{{ $t("profile.activity_sector") }}</label>
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
                <label class="label">{{ $t("profile.siren") }}</label>
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
            <div class="form-control w-full mt-6">
              <button
                @click.prevent="handleUpdateClick()"
                :class="[{ loading: state.isLoading }, 'btn btn-primary']"
              >
                {{
                  state.isLoading ? $t("loading") : $t("profile.edit_account")
                }}
              </button>
            </div>
          </form>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="form-update-profile__content__form">
          <form-update-password />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { maxLength, minLength, required } from "@vuelidate/validators";
import { computed, reactive } from "vue";
import userService from "../../services/userService";
import FormUpdatePasswordVue from "./FormUpdatePassword.vue";

export default {
  name: "FormUpdateProfile",

  props: ["user"],

  components: {
    "form-update-password": FormUpdatePasswordVue,
  },

  setup() {
    const state = reactive({
      isProfessional: false,
      status: "individual",
      lastname: "",
      firstname: "",
      email: "",
      area: "",
      siren: "",
      isLoading: false,
      success: false,
      errors: {},
    });

    const rules = computed(() => {
      return {
        status: [required],
        lastname: [required],
        firstname: [required],
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

  created() {
    this.state.isProfessional = this.user.isProfessional;
    this.state.status = this.user.status;
    this.state.lastname = this.user.lastname;
    this.state.firstname = this.user.firstname;
    this.state.email = this.user.email;
    this.state.area = this.user.area;
    this.state.siren = this.user.siren;
  },
  watch: {
    "state.status"(val) {
      this.state.success = false;
    },
  },
  methods: {
    handleStatusChange() {
      this.state.isProfessional = this.state.status === "professional";
    },

    async handleUpdateClick() {
      this.state.isLoading = true;
      try {
        const user = {
          status: this.state.status,
          lastname: this.state.lastname,
          firstname: this.state.firstname,
          email: this.state.email,
          area: this.state.area,
          siren: this.state.siren,
          id: this.user.id,
        };
        const response = await userService.updateUser(user, this.$i18n.locale);
        this.state.errors = {};
        this.state.isLoading = false;
        this.state.success = true;
      } catch (e) {
        this.state.isLoading = false;
        this.state.errors = e.response.data.errors;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-update-profile {
  &__content {
    &__title {
      & h1 {
        @apply text-left text-2xl font-bold;
      }
    }

    &__form {
      @apply flex-1;
    }

    &__separator {
      @apply flex gap-5 justify-between;
    }
  }
}
</style>