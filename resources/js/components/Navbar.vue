<template>
  <div class="bg-base-100">
    <div class="navbar wrapper border-b-2 border-gray-100">
      <div class="flex-1 flex gap-10 item-center">
        <a href="/" class="normal-case text-xl text-yellow-600"
          ><img width="90" src="/images/logo.png" alt=""
        /></a>

        <router-link to="/">Mes projets</router-link>

        <div class="indicator">
          <span
            v-if="state.notification !== 0"
            class="indicator-item badge-custome"
          ></span>

          <router-link to="/devis">Devis reçus</router-link>
        </div>

        <router-link to="/project/archives">Archive</router-link>
      </div>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost">
            <p>{{ state.user }}</p>
          </label>
          <ul
            tabindex="0"
            class="
              mt-3
              p-2
              shadow
              menu menu-compact
              dropdown-content
              bg-base-100
              rounded-box
              w-52
            "
          >
            <li><a href="/profile">Profile</a></li>
            <li @click="logout"><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import inviteService from "../services/inviteService";

export default {
  name: "Navbar",

  setup() {
    const state = reactive({
      user: null,
      notification: 0,
    });

    return {
      state,
    };
  },

  async created() {
    this.state.user = `${this.$store.state.userStore.user.firstname} ${this.$store.state.userStore.user.lastname}`;

    try {
      const response = await inviteService.getInvites(
        this.$store.state.userStore.user.email
      );
      if (response.data.length > 0) {
        this.state.notification += 1;
      }
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    logout() {
      this.$store.commit("SET_TOKEN", "");
      this.$store.commit("SET_USER", null);
      window.location = "/login";
    },
  },
};
</script>

<style lang="scss" scoped>
.indicator {
  position: relative;
}
.badge-custome {
  position: absolute;
  right: -11px;
  top: 5px;
  width: 10px;
  height: 10px;
  padding: 0;
  /* color: red; */
  background: red;
  border: none;
  border-radius: 50%;
}
</style>