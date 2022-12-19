<template>
  <div class="project-list">
    <div class="project-list__content">
      <div class="project-list__content__item">
        <a
          href="#"
          class="card card-compact bg-base-100 shadow-md w-1/4 mt-5"
          v-for="(project, key) in state.projects.data"
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
            </div>

            <p class="text-left">{{ project.description }}</p>
          </div>
        </a>
      </div>

      <TailwindPagination
        :data="state.projects"
        @pagination-change-page="loadArchivedProjects"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import userService from "../../services/userService";

import { TailwindPagination } from "laravel-vue-pagination";

export default {
  name: "Projects",

  setup() {
    const state = reactive({
      name: "",
      description: "",
      image: "",
      showModal: false,
      isLoading: false,
      projects: {},
    });

    return {
      state,
    };
  },
  components: {
    TailwindPagination,
  },

  methods: {
    cancelForm() {
      this.state.name = "";
      this.state.description = "";
      this.state.image = "";
      this.state.showModal = false;
    },
    uploadImage(e) {
      this.state.image = e.target.files[0];
    },

    async loadArchivedProjects(page = 1) {
      const userId = this.$route.params.id;
      const response = await userService.getUserProjects(userId, page);

      if (response.projects) {
        this.state.projects = response.projects;
      }
    },

    async unarchiveProject(project) {
      const response = await ProjectService.unarchiveProject(project.id);
      if (response.status === 200) {
        this.loadArchivedProjects();
      }
    },
  },

  created() {
    this.loadArchivedProjects();
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