<template>
  <div class="devis-list">
    <div class="devis-list__header">
      <div class="devis-list__header__project">
        <h1>{{ devis.name }}</h1>
        <button
          v-if="devis.user_id === this.$store.state.userStore.user.id"
          class="btn btn-primary"
          @click="state.showModal = true"
        >
          Créer une étape
        </button>
      </div>
      <button
        v-if="devis.user_id === this.$store.state.userStore.user.id"
        class="btn btn-primary"
        @click="state.showModalShare = true"
      >
        Partager
      </button>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div class="devis-list__content">
        <div class="devis-list__content__item" v-if="features.length > 0">
          <div
            class="
              w-full
              bg-gray-100
              text-left
              flex
              justify-between
              items-center
              rounded
              shadow-md
              p-3
            "
            v-for="(feature, key) in features"
            :key="key"
          >
            <div class="flex gap-3 items-center">
              <div class="p-2 bg-secondary text-white rounded font-bold">
                {{ feature.price }}€
              </div>
              <div>
                <div class="text-lg">{{ feature.name }}</div>
                <div class="text-sm">
                  <span class="font-bold">Deadline</span>:
                  {{ feature.deadline }}
                </div>
              </div>
            </div>
            <div class="flex">
              <div>
                <span class="text-secondary text-sm" v-if="isWaiting(feature)"
                  >En attente de validation</span
                >
                <button
                  class="btn btn-primary"
                  @click="validateBtn(feature)"
                  v-if="isWaitingClient(feature)"
                >
                  Valider
                </button>

                <button
                  class="btn bg-red-500 text-white ml-2"
                  @click="openRejectStepModal(feature)"
                  v-if="isWaitingClient(feature)"
                >
                  Refuser
                </button>
                <button
                  class="btn btn-primary"
                  @click="openDelivredModal(feature)"
                  v-if="isValidated(feature)"
                >
                  Délivrer
                </button>
                <span
                  class="text-secondary text-sm"
                  v-if="isValidatedClient(feature)"
                  >En attente de délivrable</span
                >
                <span class="text-red-500 text-sm" v-if="isCanceled(feature)"
                  >Non validée</span
                >
                <span
                  class="text-danger text-sm"
                  v-if="isCanceledClient(feature)"
                  >Non validée</span
                >
                <span class="text-secondary text-sm" v-if="isDelivered(feature)"
                  >En attente de confirmation</span
                >
                <button
                  class="btn btn-primary"
                  @click="openIsDelivredModal(feature)"
                  v-if="isDeliveredClient(feature)"
                >
                  Valider les délivrables
                </button>
                <span class="text-danger text-sm" v-if="isSuccess(feature)"
                  >Confirmé</span
                >
                <span class="text-sm" v-if="isSuccessClient(feature)"
                  >Acceptée</span
                >

                <span class="text-sm" v-if="isRejected(feature)">Refusée</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
          <img src="/images/logo_b&w.png" alt="logo paybystep" />
          <p class="text-xl font-bold">Vous n'avez aucune étape</p>
          <button class="btn btn-primary" @click="state.showModal = true">
            Créer un étape
          </button>
        </div>
      </div>
      <div class="devis-list__description">
        <p class="mb-1 text-sm">Description</p>

        <!-- <textarea
          id="message"
          rows="4"
          class="
            block
            p-2.5
            w-full
            text-sm text-gray-900
            bg-gray-50
            rounded-lg
            border border-gray-300
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Your message..."
          v-model="state.content"
        ></textarea> -->

        <QuillEditor
          theme="snow"
          :options="state.options"
          v-model:content="state.content"
          style="height: 250px"
          contentType="html"
        />

        <button
          @click="sendMessage"
          type="submit"
          class="
            inline-flex
            justify-center
            p-2
            text-blue-600
            rounded-full
            cursor-pointer
            hover:bg-blue-100
            dark:text-blue-500 dark:hover:bg-gray-600
            mb-5
          "
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            ></path>
          </svg>
          <span class="sr-only">Send message</span>
        </button>
        <LeadConversation :leadConversation="leadConversation" />
      </div>
    </div>

    <vue-final-modal
      v-model="state.showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>
      <span class="modal__title">Créer une étape</span>
      <div class="modal__content">
        <div class="project-list__form">
          <div class="form-control w-full">
            <label class="label">Nom de l'étape</label>
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
            <label class="label">Prix</label>
            <input
              type="text"
              :class="[
                { 'input-error': v$.price.$error },
                'input input-bordered rounded-md w-full',
              ]"
              v-model="state.price"
            />
            <label v-if="v$.price.$error" class="label">
              <span class="label-text-alt text-red-400">{{
                v$.price.$errors[0].$message
              }}</span>
            </label>
          </div>
          <div class="form-control w-full">
            <label class="label">Deadline</label>
            <input
              type="date"
              :class="[
                { 'input-error': v$.deadline.$error },
                'input input-bordered rounded-md w-full',
              ]"
              v-model="state.deadline"
              :min="new Date().toISOString().split('T')[0]"
            />
            <label v-if="v$.deadline.$error" class="label">
              <span class="label-text-alt text-red-400">{{
                v$.deadline.$errors[0].$message
              }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="modal__action">
        <button class="btn btn-link" @click="cancelForm()">Annuler</button>
        <button
          @click="handlePFeatureClick"
          :class="[{ loading: state.isLoading }, 'btn btn-primary']"
        >
          {{ state.isLoading ? "loading" : "Créer" }}
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalShare"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>

      <span class="modal__title">Partager le devis</span>
      <div class="modal__content">
        <!-- <div class="project-list__form">
                    <div class="form-control w-full">
                        <label class="label">Inviter via le lien</label>
                        <div class="input-group">
                            <input type="text" disabled="true" class="w-full input" :value="test" />
                            <button class="btn btn-square px-10">Copier</button>
                        </div>
                    </div>
                </div>
                <div class="divider">OU</div> -->
        <div v-if="state.isSendEmail" class="alert alert-success my-5">
          <div>
            <span>Un email vient d'être envoyé</span>
          </div>
        </div>
        <div v-if="state.isSendEmailError" class="alert alert-error my-5">
          <div>
            <span>Un email est déjà envoyé</span>
          </div>
        </div>
        <div v-if="state.isSendEmailErrorCatch" class="alert alert-error my-5">
          <div>
            <span>Une erreure est survenu.</span>
          </div>
        </div>
        <div class="project-list__form">
          <div class="form-control w-full">
            <label class="label">Adresse mail</label>
            <input
              type="email"
              :class="[
                { 'input-error': vEmail$.email.$error },
                'input input-bordered rounded-md w-full',
              ]"
              v-model="state.email"
            />
            <label v-if="vEmail$.email.$error" class="label">
              <span class="label-text-alt text-red-400">{{
                vEmail$.email.$errors[0].$message
              }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="modal__action">
        <button class="btn btn-link" @click="cancelFormInvite()">
          Annuler
        </button>
        <button
          @click="handleInvitationClick"
          :class="[{ loading: state.isLoadingInvite }, 'btn btn-primary']"
        >
          {{ state.isLoadingInvite ? "loading" : "Envoyer le lien" }}
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalDelivred"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">Vérification du Délivrable</span>
        <button class="" @click="state.showModalDelivred = false">X</button>
      </div>

      <div class="modal__content py-4">
        <DeliverFeature
          v-if="state.showModalDelivred"
          :feature="state.currentFeature"
          v-on:fileDelivered="fileDelivered()"
          v-on:linkDelivered="linkDelivered()"
          v-on:closeModal="state.showModalDelivred = false"
        />
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalIsDelivred"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">Vérification du Délivrable</span>
        <button class="" @click="state.showModalIsDelivred = false">X</button>
      </div>

      <div class="modal__content">
        <ValidateDeliveredFeature
          :feature="state.currentFeature"
          v-if="state.showModalIsDelivred"
          v-on:closeModal="state.showModalIsDelivred = false"
          v-on:deliveryAccepted="deliveryAccepted()"
        />
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showRejectStep"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>
      <span class="modal__title">Refus de l'etape</span>
      <div class="modal__content">
        <p class="my-5">Etes vous sur de vouloir refuser cette etape?</p>
      </div>
      <div class="modal__action">
        <button
          @click="state.showRejectStep = false"
          class="btn btn-bg-black-500 text-white mr-2"
        >
          Annuler
        </button>
        <button @click="handleRejectStep()" class="btn btn-primary">
          Valider
        </button>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { VueFinalModal, ModalsContainer } from "vue-final-modal";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import featureService from "../../services/featureService";
import leadConversationService from "../../services/leadConversationService";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import inviteService from "../../services/inviteService";
import LeadConversation from "../conversation/LeadConversation.vue";
import DeliverFeature from "../feature/DeliverFeature.vue";
import ValidateDeliveredFeature from "../feature/ValidateDeliveredFeature.vue";
export default {
  name: "DevisList",

  props: ["devis", "features", "leadConversation"],

  setup() {
    const state = reactive({
      showModal: false,
      showModalShare: false,
      showModalDelivred: false,
      showModalIsDelivred: false,
      isSendEmail: false,
      isSendEmailError: false,
      isLoadingInvite: false,
      isSendEmailErrorCatch: false,
      showRejectStep: false,
      name: "",
      email: "",
      deadline: new Date().toISOString().split("T")[0],
      price: 0,
      content: "",
      options: {
        modules: {
          toolbar: ["bold", "italic", "underline"],
        },
        readOnly: false,
        theme: "snow",
        contentType: "html",
      },
      currentFeature: null,
      rejectedStep: null,
    });

    const rules = computed(() => {
      return {
        name: { required },
        deadline: { required },
        price: { required },
      };
    });

    const rulesEmail = computed(() => {
      return {
        email: { email },
      };
    });

    const v$ = useVuelidate(rules, state);
    const vEmail$ = useVuelidate(rulesEmail, state);

    return {
      state,
      v$,
      vEmail$,
    };
  },

  components: {
    ModalsContainer,
    VueFinalModal,
    QuillEditor,
    LeadConversation,
    DeliverFeature,
    ValidateDeliveredFeature,
  },

  computed: {
    test() {
      return `${process.env.MIX_APP_URL}/invite/${this.devis.project_id}/${this.devis.user_id}`;
    },
  },

  methods: {
    openDelivredModal(feature) {
      this.state.currentFeature = feature;
      this.state.showModalDelivred = true;
    },

    openIsDelivredModal(feature) {
      this.state.currentFeature = feature;
      this.state.showModalIsDelivred = true;
    },
    openRejectStepModal(feature) {
      this.state.rejectedStep = feature;
      this.state.showRejectStep = true;
    },

    async cancelIsDelivry() {
      try {
        const response = await featureService.downSteptwo(
          this.state.currentFeature
        );
        if (response.status === 200) {
          location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    },

    async handleRejectStep() {
      try {
        const response = await featureService.rejectStep(
          this.state.rejectedStep
        );
        if (response.status === 200) {
          this.state.showRejectStep = false;
          this.$emit("rejectStep");
        }
      } catch (error) {
        console.error(error);
      }
    },

    cancelForm() {
      this.state.name = "";
      this.state.price = 0;
      this.state.deadline = new Date().toISOString().split("T")[0];
      this.state.showModal = false;
    },

    cancelFormInvite() {
      this.state.email = "";
      this.state.showModalShare = false;
      this.state.isSendEmail = false;
      this.state.isSendEmailError = false;
      this.state.isSendEmailErrorCatch = false;
    },

    isWaiting(feature) {
      if (feature.user_id === this.$store.state.userStore.user.id)
        return feature.validation.identifier === "waiting";
      else return false;
    },

    isWaitingClient(feature) {
      if (feature.user_id !== this.$store.state.userStore.user.id)
        return feature.validation.identifier === "waiting";
      else return false;
    },

    isValidated(feature) {
      if (feature.user_id === this.$store.state.userStore.user.id)
        return feature.validation.identifier === "validated";
      else return false;
    },

    isValidatedClient(feature) {
      if (feature.user_id !== this.$store.state.userStore.user.id)
        return feature.validation.identifier === "validated";
      else return false;
    },

    isCanceled(feature) {
      if (feature.user_id === this.$store.state.userStore.user.id)
        return feature.validation.identifier === "canceled";
      else return false;
    },

    isCanceledClient(feature) {
      if (feature.user_id !== this.$store.state.userStore.user.id)
        return feature.validation.identifier === "canceled";
      else return false;
    },

    isDelivered(feature) {
      if (feature.user_id === this.$store.state.userStore.user.id)
        return feature.validation.identifier === "delivered";
      else return false;
    },

    isDeliveredClient(feature) {
      if (feature.user_id !== this.$store.state.userStore.user.id)
        return feature.validation.identifier === "delivered";
      else return false;
    },

    isSuccess(feature) {
      if (feature.user_id === this.$store.state.userStore.user.id)
        return feature.validation.identifier === "success";
      else return false;
    },

    isSuccessClient(feature) {
      if (feature.user_id !== this.$store.state.userStore.user.id)
        return feature.validation.identifier === "success";
      else return false;
    },

    isRejected(feature) {
      return feature.validation_id == 6;
    },

    async validateBtn(feature) {
      try {
        const response = await featureService.updateStepTwo(feature);
        if (response.status === 200) {
          this.$emit("validateStep");
        }
      } catch (error) {
        console.error(error);
      }
    },

    async delivredBtn() {
      try {
        const response = await featureService.updateStepThree(
          this.state.currentFeature
        );
        if (response.status === 200) {
          location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    },

    async handlePFeatureClick() {
      this.v$.$validate();
      if (this.v$.$error) return;

      try {
        this.state.isLoading = true;
        const response = await featureService.createFeature({
          name: this.state.name,
          devis_id: this.devis.id,
          price: this.state.price,
          deadline: this.state.deadline,
        });

        if (response.status === 201) {
          location.reload();
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.state.isLoading = false;
      }
    },

    async handleInvitationClick() {
      this.vEmail$.$validate();
      if (this.vEmail$.$error) return;
      this.state.isLoadingInvite = true;
      this.state.isSendEmail = false;
      this.state.isSendEmailError = false;
      this.state.isSendEmailErrorCatch = false;
      try {
        const response = await inviteService.sendInvite(this.devis.project_id, {
          email: this.state.email,
          userId: this.$store.state.userStore.user.id,
        });
        if (response.data.success) this.state.isSendEmail = true;
        else this.state.isSendEmailError = true;
      } catch (error) {
        this.state.isSendEmailErrorCatch = true;
        console.error(error);
      } finally {
        this.state.isLoadingInvite = false;
      }
    },
    // send lead conversation message
    async sendMessage() {
      if (this.state.content) {
        try {
          const response =
            await leadConversationService.storeLeadConversationMessage({
              message: this.state.content,
              lead_id: this.devis.id,
              user_id: this.$store.state.userStore.user.id,
            });
          if (response.status == 201) {
            this.state.content = "";
            this.$emit("sendMessage");
          }
        } catch (error) {
          console.error(error);
        }
      }
    },

    linkDelivered() {
      this.state.showModalDelivred = false;
      this.$emit("linkDelivered");
    },
    fileDelivered() {
      this.state.showModalDelivred = false;
      this.$emit("fileDelivered");
    },
    deliveryAccepted() {
      this.state.showModalIsDelivred = false;
      this.$emit("deliveryAccepted");
    },
  },
};
</script>

<style lang="scss" scoped>
.devis-list {
  min-height: 80vh;

  &__header {
    @apply flex justify-between items-center;

    &__project {
      @apply text-left flex gap-3;

      h1 {
        @apply text-3xl font-bold;
      }

      p {
        @apply text-gray-600;
      }
    }
  }

  &__content {
    @apply mt-6;

    &__item {
      @apply w-full mt-4 flex flex-col gap-4;
    }
  }

  &__description {
    @apply text-left;
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