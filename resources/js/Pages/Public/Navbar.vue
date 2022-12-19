<template>
  <div class="bg-base-100">
    <div class="navbar wrapper border-b-2 border-gray-100">
      <div class="flex-1 flex gap-10 item-center">
        <router-link to="/" class="normal-case text-xl text-yellow-600"
          ><img width="90" src="/images/logo.png" alt=""
        /></router-link>
      </div>

      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost">
            <p>{{ formatUser }}</p>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

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
  props: ["user"],
  computed: {
    formatUser() {
      if (this.user) {
        return this.user.firstname + " " + this.user.lastname;
      }
    },
  },
  async created() {},

  methods: {
    logout() {},
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