<template>
  <div class="dashboard">
    <navbar :user="state.user" />
    <breadcrumb :items="[{ link: '/', name: formatUser }]" />
    <div class="wrapper">
      <div class="dashboard__content">
        <Projects />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import userService from "../../services/userService";
import NavbarVue from "../Public/Navbar.vue";
import BreadcrumbVue from "../../components/Breadcrumb.vue";
import Projects from "../Public/Projects.vue";
export default {
  name: "Profile",

  components: {
    navbar: NavbarVue,
    breadcrumb: BreadcrumbVue,
    Projects,
  },

  setup() {
    const state = reactive({
      isLoaded: false,
      user: {},
    });

    return {
      state,
    };
  },
  computed: {
    formatUser() {
      if (this.state.user) {
        return this.state.user.firstname + " " + this.state.user.lastname;
      }
    },
  },
  async created() {
    try {
      const userId = this.$route.params.id;

      const response = await userService.getUserDetails(userId);
      if (response.status) {
        this.state.user = response.user;
      }
    } catch (e) {
      if (e.response.status === 404) {
        window.location.href = "/login";
      }
    } finally {
      this.state.isLoaded = false;
    }
  },
};
</script>

<style lang="scss">
.dashboard {
  background-color: #eff0f2;
  height: 100vh;

  &__content {
    @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
  }
}
</style>