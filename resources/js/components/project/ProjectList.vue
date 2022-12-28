<template>
  <div class="project-list">
    <div class="project-list__btn">
      <button class="btn btn-primary" @click="state.showModal = true">
        {{ $t("create_project") }}
      </button>
    </div>
    <div class="project-list__content">
      <div class="project-list__content__item" v-if="state.projects.length > 0">
        <router-link
          :to="`/project/${project.slug}`"
          class="card card-compact bg-base-100 shadow-md w-1/4 mt-5"
          v-for="(project, key) in state.projects"
          :key="key"
        >
          <figure>
            <img
              :src="
                project.image
                  ? project.image
                  : 'https://paybystep.s3.eu-west-3.amazonaws.com/bg-default.png'
              "
              alt="Shoes"
              class="h-36 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <h2 class="card-title font-bold">
                {{ project.name }}
              </h2>

              <a
                @click.prevent="archiveProject(project)"
                title="archiver"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-archive"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                  <line x1="10" y1="12" x2="14" y2="12"></line>
                </svg>
              </a>
            </div>

            <p class="text-left">{{ project.description }}</p>
          </div>
        </router-link>
      </div>
      <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
        <img src="/images/logo_b&w.png" alt="logo paybystep" />
        <p class="text-xl font-bold">{{$t('project.no_project_found')}}</p>
        <button class="btn btn-primary" @click="state.showModal = true">
          {{ $t("create_project") }}
        </button>
      </div>
    </div>
    <vue-final-modal
      v-model="state.showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>
      <span class="modal__title">{{$t('project.create_project')}}</span>
      <div class="modal__content">
        <div class="project-list__form">
          <div class="form-control w-full">
            <label class="label">{{$t('project.project_name')}}</label>
            <input
              type="text"
              :class="[
                { 'input-error': v$.name.$error },
                'input input-bordered rounded-md w-full',
              ]"
              v-model="state.name"
            />
            <label v-if="v$.name.$error" class="label">
              <span class="label-text-alt text-red-400">{{
                v$.name.$errors[0].$message
              }}</span>
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label justify-start gap-3"
              >{{$t('project.description')}} <span class="badge badge-sm">{{$t('optional')}}</span></label
            >
            <textarea
              class="textarea textarea-bordered"
              v-model="state.description"
            ></textarea>
          </div>
          <div class="form-control w-full">
            <label class="label justify-start gap-3"
              >Image <span class="badge badge-sm">{{$t('optional')}}</span></label
            >
            <input
              type="file"
              class="input input-bordered w-full"
              @change="uploadImage($event)"
            />
          </div>
        </div>
      </div>
      <div class="modal__action">
        <button class="btn btn-link" @click="cancelForm()">{{$t('cancel')}}</button>
        <button
          @click="handleLoginClick"
          :class="[{ loading: state.isLoading }, 'btn btn-primary']"
        >
          {{ state.isLoading ? $t('loading') : $t('create') }}
        </button>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import ProjectService from "../../services/projectService";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";

import FormCreateProjectVue from "./FormCreateProject.vue";

export default {
  name: "ProjectList",

  setup() {
    const state = reactive({
      name: "",
      description: "",
      image: "",
      showModal: false,
      isLoading: false,
      projects: [],
    });

    const rules = computed(() => {
      return {
        name: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },

  components: {
    VueFinalModal,
    ModalsContainer,
    FormCreateProjectVue,
  },

  methods: {
    async handleLoginClick() {
      this.v$.$validate();
      if (this.v$.$error) return;

      try {
        this.state.isLoading = true;
        let body = new FormData();
        body.append("name", this.state.name);
        body.append("description", this.state.description);
        body.append("image", this.state.image);

        const response = await ProjectService.createProject(body);

        if (response.status === 201) {
          location.reload();
        }
      } catch (e) {
        console.error("ici", e);
      } finally {
        this.state.isLoading = false;
      }
    },

    cancelForm() {
      this.state.name = "";
      this.state.description = "";
      this.state.image = "";
      this.state.showModal = false;
    },
    uploadImage(e) {
      this.state.image = e.target.files[0];
    },
    async archiveProject(project) {
      let body = new FormData();
      body.append("project_id", project.id);
      body.append("user_id", this.$store.state.userStore.user.id);
      const response = await ProjectService.archiveProject(body);
      if (response.status === 201) {
        this.loadProjects();
      }
    },
    async loadProjects() {
      const response = await ProjectService.getProjectsByUserId(
        this.$store.state.userStore.user.id
      );
      this.state.projects = response.data;
    },
  },

  created() {
    this.state.projects = this.$store.state.projectStore.project;
    this.loadProjects();
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