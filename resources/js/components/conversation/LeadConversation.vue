<template>
  <div v-for="(conversation, key) in leadConversation" :key="key">
    <div
      class="flex"
      :class="{
        'items-start justify-start': senderIsAuth(conversation),
        'items-end justify-end': !senderIsAuth(conversation),
      }"
    >
      <div
        class="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-1"
        :class="{
          'items-start': senderIsAuth(conversation),
          'items-end': !senderIsAuth(conversation),
        }"
      >
        <span
          class="text-gray-600 text-sm"
          v-if="showSender(conversation, key)"
        >
          <b>{{ getUser(conversation) }} </b> a envoyé:
        </span>
        <span
          :title="moment(conversation.created_at).format('DD-MM-YYYY HH:mm:ss')"
          class="px-4 py-2 rounded-lg inline-block rounded-br-none mb-1"
          :class="{
            'bg-gray-300 text-gray-600': senderIsAuth(conversation),
            'bg-blue-600 text-white': !senderIsAuth(conversation),
          }"
          >{{ conversation.message }}
        </span>
        <div class="flex justify-end text-gray-600 text-xs"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, Vue } from "vue";

import moment from "moment";
import "moment/min/locales";
moment.locale("fr");
export default {
  props: ["leadConversation"],

  setup() {
    const state = reactive({});

    return {
      state,
    };
  },
  computed: {
    moment: () => moment,
  },
  methods: {
    senderIsAuth(conversation) {
      return conversation.user_id == this.$store.state.userStore.user.id;
    },
    getUser(conversation) {
      return conversation.user.firstname + " " + conversation.user.lastname;
    },

    showSender(conversation, key) {
      if (this.leadConversation[key - 1]) {
        let lastConversation = this.leadConversation[key - 1];
        if (conversation.user_id == lastConversation.user_id) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style>
</style>