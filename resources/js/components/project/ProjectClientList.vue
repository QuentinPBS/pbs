<template>
  <div class="project-list">
    <div class="project-list__content">
      <div
        v-if="invitation"
        @click="state.showModal = true"
        class="alert alert-info shadow-sm w-72 cursor-pointer"
      >
        <span class="text-center text-white font-bold"
          >{{$t('quote_request_message')}}</span
        >
      </div>
      <div class="project-list__content__item" v-if="projects.length > 0">
        <router-link
          :to="`/project/${project.slug}`"
          class="card card-compact bg-base-100 shadow-md w-1/4 mt-5"
          v-for="project in projects"
        >
          <figure>
            <img
              :src="
                project.image
                  ? project.image
                  : 'https://paybystep.s3.eu-west-3.amazonaws.com/bg-default.png'
              "
              alt=""
              class="h-36 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold text-left">
              {{ project.name }}
            </h2>
            <p class="text-left">{{ project.description }}</p>
          </div>
        </router-link>
      </div>
      <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
        <img src="/images/logo_b&w.png" alt="logo paybystep" />
               <p class="text-xl font-bold">{{$t('no_quote_found')}}</p>
      </div>
    </div>
    <vue-final-modal
      v-if="invitation"
      v-model="state.showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>
      <span class="modal__title text-center"
        >{{ invitation[0].user.firstname }} {{ invitation[0].user.lastname }}
        <span class="font-normal">{{$t('project.project_invite_message')}}</span>
        {{ invitation[0].project.name }}</span
      >
      <div class="modal__content"></div>
      <div class="modal__action justify-center">
        <button
          @click="handleRejectClick"
          :class="[{ loading: state.isLoadingNo }, 'btn btn-link']"
        >
          {{ state.isLoading ? $t('loading') : $t('no') }}
        </button>
        <button
          @click="handleAcceptClick"
          :class="[{ loading: state.isLoadingYes }, 'btn btn-primary']"
        >
          {{ state.isLoading ? $t('loading') : $t('yes') }}
        </button>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import { reactive } from "vue";
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
import inviteService from "../../services/inviteService";

export default {
  name: "ProjectClientList",

  props: ["projects", "invitation"],

  components: {
    VueFinalModal,
    ModalsContainer,
  },

  setup() {
    const state = reactive({
      isLoadingYes: false,
      isLoadingNo: false,
      showModal: false,
    });

    return {
      state,
    };
  },

  methods: {
    handleAcceptClick: async function () {
      this.state.isLoadingYes = true;
      try {
        await inviteService.acceptedInvite(this.invitation[0].token);
        location.reload();
      } catch (error) {
        console.error(error);
      }
    },

    handleRejectClick: async function () {
      this.state.isLoadingNo = true;
      try {
        await inviteService.rejectInvite(this.invitation[0].token);
        location.reload();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-list {
  min-height: 80vh;

  &__btn {
    @apply flex justify-end;
  }

  &__content {
    &__item {
      @apply flex flex-wrap gap-8;
    }
  }

  &__form {
    @apply my-5;
  }
}

.modal__action {
  justify-content: center !important;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  text-align: initial;
  width: 500px;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.modal__action {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
</style>