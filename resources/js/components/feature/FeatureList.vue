<template>
  <div class="devis-list">
    <div class="devis-list__header">
      <div class="devis-list__header__project">
        <h1>{{ devis.name }}</h1>
        <button
          v-if="devis.is_owner"
          class="btn btn-primary"
          @click="state.showModal = true"
        >
          {{ $t("feature.step.create_step") }}
        </button>
      </div>
      <button
        v-if="devis.user_id === this.$store.state.userStore.user.id"
        class="btn btn-primary"
        @click="state.showModalShare = true"
      >
        {{ $t("feature.share") }}
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
                  {{ convertDeadline(feature.deadline) }}
                </div>
              </div>
            </div>
            <div class="flex">
              <div>
                <span
                  class="text-secondary text-sm"
                  v-if="isWaiting(feature)"
                  >{{ $t("feature.step.waiting_for_approval") }}</span
                >
                <button
                  :class="[
                    { loading: featureIsLoading(feature) },
                    'btn btn-primary',
                  ]"
                  @click="validateBtn(feature)"
                  v-if="isWaitingClient(feature)"
                >
                  {{ $t("feature.step.validate") }}
                </button>

                <button
                  class="btn bg-red-500 text-white ml-2"
                  @click="openRejectStepModal(feature)"
                  v-if="isWaitingClient(feature)"
                >
                  {{ $t("feature.step.refuse") }}
                </button>
                <button
                  class="btn btn-primary"
                  @click="openDelivredModal(feature)"
                  v-if="isValidated(feature)"
                >
                  {{ $t("feature.step.deliver") }}
                </button>
                <span
                  class="text-secondary text-sm"
                  v-if="isValidatedClient(feature)"
                >
                  {{ $t("feature.step.waiting_for_delivrable") }}</span
                >
                <span class="text-red-500 text-sm" v-if="isCanceled(feature)">
                  {{ $t("feature.step.non_valid") }}</span
                >
                <span
                  class="text-danger text-sm"
                  v-if="isCanceledClient(feature)"
                >
                  {{ $t("feature.step.non_valid") }}</span
                >
                <span
                  class="text-secondary text-sm"
                  v-if="isDelivered(feature)"
                >
                  {{ $t("feature.step.waiting_for_confirmation") }}</span
                >
                <button
                  class="btn btn-primary"
                  @click="openIsDelivredModal(feature)"
                  v-if="isDeliveredClient(feature)"
                >
                  {{ $t("feature.step.validate_delivrable") }}
                </button>
                <span class="text-danger text-sm" v-if="isSuccess(feature)">
                  {{ $t("feature.step.confirmed") }}</span
                >
                <span class="text-sm" v-if="isSuccessClient(feature)">
                  {{ $t("feature.step.accepted") }}</span
                >

                <span class="text-sm" v-if="isRejected(feature)">
                  {{ $t("feature.step.refused") }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
          <img src="/images/logo_b&w.png" alt="logo paybystep" />
          <p class="text-xl font-bold">{{ $t("feature.step.not_found") }}</p>
          <button
            class="btn btn-primary"
            @click="state.showModal = true"
            v-if="devis.is_owner"
          >
            {{ $t("feature.step.create_step") }}
          </button>
        </div>
      </div>
      <div class="devis-list__description">
        <p class="mb-1 text-sm">Description</p>
        <QuillEditor
          ref="myEditor"
          theme="snow"
          :options="state.options"
          v-model:content="state.content"
          style="height: 250px"
          contentType="html"
        />
        <button
          @click="sendMessage"
          :class="[{ loading: state.isLoading }, 'btn bg-blue-400 mt-2']"
        >
          save
        </button>

        <!-- <LeadConversation :leadConversation="leadConversation" /> -->
      </div>
    </div>

    <vue-final-modal
      v-model="state.showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>
      <span class="modal__title">{{ $t("feature.step.create_step") }}</span>
      <div class="modal__content">
        <div class="project-list__form">
          <div class="form-control w-full">
            <label class="label">{{ $t("feature.step.step_name") }}</label>
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
            <label class="label">{{ $t("feature.step.price") }}</label>
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
            <label class="label">{{ $t("feature.step.deadline") }}</label>
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
        <button class="btn btn-link" @click="cancelForm()">
          {{ $t("cancel") }}
        </button>
        <button
          @click="handlePFeatureClick"
          :class="[
            { loading: state.isLoadingCreateDelivery },
            'btn btn-primary',
          ]"
        >
          {{ state.isLoading ? $t("loading") : $t("create") }}
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalShare"
      classes="modal-container"
      content-class="modal-content"
    >
      <button class="modal__close" @click="state.showModal = false">X</button>

      <span class="modal__title">{{ $t("feature.share_feature") }}</span>
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
            <span>{{ $t("email.email_sent_message") }}</span>
          </div>
        </div>
        <div v-if="state.isSendEmailError" class="alert alert-error my-5">
          <div>
            <span>{{ $t("email.email_already_sent_message") }}</span>
          </div>
        </div>
        <div v-if="state.isSendEmailErrorCatch" class="alert alert-error my-5">
          <div>
            <span>{{ $t("error") }}</span>
          </div>
        </div>
        <div class="project-list__form">
          <div class="form-control w-full">
            <label class="label">{{ $t("feature.email") }}</label>
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
          {{ $t("cancel") }}
        </button>
        <button
          @click="handleInvitationClick"
          :class="[{ loading: state.isLoadingInvite }, 'btn btn-primary']"
        >
          {{ state.isLoadingInvite ? $t("loading") : $t("feature.send_link") }}
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalDelivred"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">{{
          $t("feature.step.delivrable_verification")
        }}</span>
        <button class="" @click="state.showModalDelivred = false">X</button>
      </div>

      <div class="modal__content py-4">
        <DeliverFeature
          v-if="state.showModalDelivred"
          :feature="state.currentFeature"
          v-on:fileDelivered="fileDelivered()"
          v-on:linkDelivered="linkDelivered()"
          v-on:nullableFileDelivered="nullableFileDelivered()"
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
        <span class="modal__title">{{
          $t("feature.step.delivrable_verification")
        }}</span>
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
      <span class="modal__title">{{ $t("feature.step.step_reject") }}</span>
      <div class="modal__content">
        <p class="my-5">{{ $t("feature.step.step_reject_question") }}</p>
      </div>
      <div class="modal__action">
        <button
          @click="state.showRejectStep = false"
          class="btn btn-bg-black-500 text-white mr-2"
        >
          {{ $t("cancel") }}
        </button>
        <button
          @click="handleRejectStep()"
          :class="[
            { loading: state.isLoadingRejectDelivery },
            'btn btn-primary',
          ]"
        >
          {{ $t("feature.step.validate") }}
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

import Quill from "quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import inviteService from "../../services/inviteService";
import LeadConversation from "../conversation/LeadConversation.vue";
import DeliverFeature from "../feature/DeliverFeature.vue";
import ValidateDeliveredFeature from "../feature/ValidateDeliveredFeature.vue";
export default {
  name: "DevisList",

  props: ["devis", "features", "conversation"],

  mounted() {
    window.userId = this.$store.state.userStore.user.id;
    var Block = Quill.import("blots/block");

    class SpanBlock extends Block {
      static create(value) {
        let node = super.create();
        node.setAttribute("class", `user-${window.userId}`);
        return node;
      }
    }
    Quill.register(SpanBlock);

    this.processDom();
  },
  setup() {
    const state = reactive({
      showModal: false,
      showModalShare: false,
      showModalDelivred: false,
      showModalIsDelivred: false,
      isSendEmail: false,
      isSendEmailError: false,
      isLoadingInvite: false,
      isLoadingCreateDelivery: false,
      isLoadingDelivery: [],
      isLoadingRejectDelivery: null,
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
      content: "",
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
      this.state.isLoadingRejectDelivery = true;
      try {
        const response = await featureService.rejectStep(
          this.state.rejectedStep
        );
        if (response.status === 200) {
          this.state.showRejectStep = false;
          this.state.isLoadingRejectDelivery = false;

          this.$emit("rejectStep");
        }
      } catch (error) {
        this.state.isLoadingDelivery = false;
        this.state.isLoadingRejectDelivery = false;
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
      this.state.isLoadingDelivery.push(feature.id);
      try {
        const response = await featureService.updateStepTwo(feature);
        if (response.status === 200) {
          this.$emit("validateStep");
        }
      } catch (error) {
        console.error(error);
        this.clearLoadingDeliveries(feature);
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
        this.state.isLoadingCreateDelivery = true;
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
        this.state.isLoadingCreateDelivery = false;
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
          lead_id: this.devis.id,
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
        this.state.isLoading = true;
        let message = this.state.content.replaceAll(
          'contenteditable="false"',
          ""
        );

        message = message.replaceAll(
          'style=" user-select: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none"',
          ""
        );

        try {
          const response =
            await leadConversationService.storeLeadConversationMessage({
              message: message,
              lead_id: this.devis.id,
              user_id: this.$store.state.userStore.user.id,
            });
          if (response.status == 201) {
            this.$emit("sendMessage");
            this.state.isLoading = false;
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
    nullableFileDelivered() {
      this.state.showModalDelivred = false;
      this.$emit("nullableFileDelivered");
    },
    deliveryAccepted() {
      this.state.showModalIsDelivred = false;
      this.$emit("deliveryAccepted");
    },

    processDom() {
      let oldContent = this.conversation.content;
      if (oldContent) {
        oldContent = oldContent.concat(
          `<p class="user-${this.$store.state.userStore.user.id}"></p>`
        );
        this.state.content = oldContent;
        this.$refs.myEditor.setHTML(oldContent);
        let elements = window.document.querySelectorAll(
          `.ql-editor>p:not([class^='user-${this.$store.state.userStore.user.id}'])`
        ); //matches all

        for (let i = 0; i < elements.length; i++) {
          elements[i].setAttribute("contenteditable", false);
          elements[i].setAttribute(
            "style",
            " user-select: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none"
          );
        }
      }
    },

    convertDeadline(deadline) {
      return deadline.split(" ")[0];
    },

    featureIsLoading(feature) {
      return this.state.isLoadingDelivery.find(
        (element) => element == feature.id
      );
    },
    clearLoadingDeliveries(feature) {
      this.state.isLoadingDelivery = this.state.isLoadingDelivery.filter(
        (element) => element !== feature.id
      );
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

.disable-select {
  user-select: none !important; /* supported by Chrome and Opera */
  -webkit-user-select: none !important; /* Safari */
  -khtml-user-select: none !important; /* Konqueror HTML */
  -moz-user-select: none !important; /* Firefox */
  -ms-user-select: none !important; /* Internet Explorer/Edge */
}
</style>