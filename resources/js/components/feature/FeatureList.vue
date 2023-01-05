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
                <span class="text-danger text-sm" v-if="isPaid(feature)">
                  {{ $t("feature.step.paid") }}</span
                >
                &nbsp;
                <button
                  class="btn btn-primary"
                  @click="openPaymentdModal(feature)"
                  v-if="isSuccessClient(feature)"
                >
                  {{ $t("feature.step.pay") }}
                </button>

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
        <p class="mb-1 text-sm">{{ $t("feature.description") }}</p>
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
          {{ $t("save") }}
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
            <label v-if="state.errors?.name" class="label">
              <span class="label-text-alt text-red-400">{{
                state.errors.name.join(", ")
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
            <label v-if="state.errors?.price" class="label">
              <span class="label-text-alt text-red-400">{{
                state.errors.price.join(", ")
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
            <label v-if="state.errors?.deadline" class="label">
              <span class="label-text-alt text-red-400">{{
                state.errors.deadline.join(", ")
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
      <button class="modal__close" @click="state.showModalShare = false">
        X
      </button>

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
        <!-- <div v-if="state.isSendEmailErrorCatch" class="alert alert-error my-5">
          <div>
            <span>{{ $t("error") }}</span>
          </div>
        </div> -->
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
            <label v-if="state.errors?.email" class="label">
              <span class="label-text-alt text-red-400">{{
                state.errors.email.join(", ")
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
      v-model="state.showModalCreateStripeAccount"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">Créer votre compte de paiement</span>
        <button class="" @click="state.showModalCreateStripeAccount = false">
          X
        </button>
      </div>

      <div class="modal__content">
        <p class="my-5">
          Pour recevoir votre paiement vous devez d'abord créer votre compte de
          paiement.
        </p>
      </div>
      <div class="modal__action">
        <button
          @click="state.showModalCreateStripeAccount = false"
          class="btn btn-bg-black-500 text-white mr-2"
        >
          Annuler
        </button>
        <button @click="handleCreateStripeAccount()" class="btn btn-primary">
          Créer un compte de paiement
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalCreateStripeCustomerAccount"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">Créer votre compte de paiement</span>
        <button
          class=""
          @click="state.showModalCreateStripeCustomerAccount = false"
        >
          X
        </button>
      </div>

      <div class="modal__content">
        <p class="my-5">
          Pour effectuer votre paiement vous devez d'abord créer votre compte de
          paiement.
        </p>
      </div>
      <div class="modal__action">
        <button
          @click="state.showModalCreateStripeCustomerAccount = false"
          class="btn btn-bg-black-500 text-white mr-2"
        >
          Annuler
        </button>
        <button
          @click="handleCreateStripeAccount('customer')"
          class="btn btn-primary"
        >
          Créer un compte de paiement
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showPaymentSuccessModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">Paiement</span>
        <button class="" @click="state.showPaymentSuccessModal = false">
          X
        </button>
      </div>

      <div class="modal__content">
        <p class="my-5 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100%"
            height="256"
            viewBox="0 0 64 64"
          >
            <radialGradient
              id="c0yjGprCnv9Gl20e9Vf6Ca"
              cx="32.5"
              cy="31.5"
              r="30.516"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#afeeff"></stop>
              <stop offset=".193" stop-color="#bbf1ff"></stop>
              <stop offset=".703" stop-color="#d7f8ff"></stop>
              <stop offset="1" stop-color="#e1faff"></stop>
            </radialGradient>
            <path
              fill="url(#undefined)"
              d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24 C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757 C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23 c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757 C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59 c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"
            ></path>
            <linearGradient
              id="c0yjGprCnv9Gl20e9Vf6Cb_118993_gr1"
              x1="32"
              x2="32"
              y1="6"
              y2="56"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#42d778"></stop>
              <stop offset=".996" stop-color="#34b171"></stop>
              <stop offset="1" stop-color="#34b171"></stop>
            </linearGradient>
            <path
              fill="url(#c0yjGprCnv9Gl20e9Vf6Cb_118993_gr1)"
              d="M57,31c0,13.805-11.195,25-25,25S7,44.805,7,31S18.195,6,32,6S57,17.195,57,31z"
            ></path>
            <path
              fill="#fff"
              d="M42.695,21.733L27.5,36.946l-5.235-5.22c-0.977-0.974-2.558-0.973-3.533,0.003l0,0 c-0.977,0.977-0.976,2.562,0.002,3.538l7.002,6.985c0.977,0.975,2.559,0.973,3.534-0.003l16.962-16.982 c0.975-0.977,0.975-2.559-0.001-3.535l0,0C45.254,20.756,43.671,20.756,42.695,21.733z"
            ></path>
          </svg>
        </p>
        <p class="my-5 text-center">
          Votre paiement a été effectué avec succès.
        </p>
      </div>
      <div class="modal__action">
        <button
          @click="state.showPaymentSuccessModal = false"
          class="btn btn-bg-black-500 text-white mr-2"
        >
          Fermer
        </button>
      </div>
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showPaymentModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="flex justify-between">
        <span class="modal__title">Paiement</span>
        <button class="" @click="state.showPaymentModal = false">X</button>
      </div>

      <div
        class="modal__content"
        v-if="state.currentFeature && state.currentFeature.price"
      >
        <p class="my-5">
          Pour valider et passer à l'étape suivante, il est necessaire
          d'effectuer le paiement de {{ state.currentFeature.price }} EUR au
          prestataire.
        </p>
      </div>
      <div class="modal__action">
        <button
          @click="state.showPaymentModal = false"
          class="btn btn-bg-black-500 text-white mr-2"
        >
          Annuler
        </button>
        <button @click="handlePayment()" class="btn btn-primary">
          Effectuer le paiement
        </button>
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
import stripeService from "../../services/stripeService";
export default {
  name: "DevisList",

  props: ["devis", "features", "conversation"],

  mounted() {
    // window.document.onkeydown = function (e) {
    //   if (e.keyCode == 17 || e.key == 17) {
    //     // alert("Not Allowed!");
    //     // e.stop();
    //     this.processDom()
    //   }
    // };
    window.userId = this.$store.state.userStore.user.id;
    var Block = Quill.import("blots/block");

    class SpanBlock extends Block {
      static create(value) {
        let node = super.create();
        node.setAttribute("class", `user-${window.userId}`);
        node.setAttribute("style", "outline:none;");
        node.setAttribute("contenteditable", "true");
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
      showPaymentModal: false,
      showModalCreateStripeAccount: false,
      showModalCreateStripeCustomerAccount: false,
      showPaymentSuccessModal: false,
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
        readOnly: true,
        theme: "snow",
        contentType: "html",
      },
      currentFeature: null,
      rejectedStep: null,
      content: "",
      errors: {},
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

  watch: {
    "state.showModal"(newVal) {
      this.state.errors = {};
    },
    "state.showModalShare"(newVal) {
      this.state.errors = {};
    },
  },

  methods: {
    async openDelivredModal(feature) {
      try {
        const response = await stripeService.checkAccount("presta");
        if (response.data.exists === true) {
          this.state.currentFeature = feature;
          this.state.showModalDelivred = true;
        } else {
          localStorage.stripeRedirect = window.location.href;
          this.state.showModalCreateStripeAccount = true;
          console.log("Create stripe account ...");
        }
      } catch (error) {
        console.error(error);
      }
    },

    openIsDelivredModal(feature) {
      this.state.currentFeature = feature;
      this.state.showModalIsDelivred = true;
    },
    openRejectStepModal(feature) {
      this.state.rejectedStep = feature;
      this.state.showRejectStep = true;
    },

    async openPaymentdModal(feature) {
      this.state.currentFeature = feature;
      try {
        const response = await stripeService.checkAccount("customer");
        if (response.data.exists === true) {
          this.state.showPaymentModal = true;
        } else {
          localStorage.stripeRedirect = window.location.href;
          this.state.showModalCreateStripeCustomerAccount = true;
          console.log("Create stripe customer account ...");
        }
      } catch (error) {
        console.error(error);
      }
    },

    async handlePayment() {
      try {
        const response = await stripeService.makePayment(
          this.state.currentFeature.id
        );
        if (response.data.code == "success") {
          this.state.showPaymentModal = false;
          this.state.showPaymentSuccessModal = true;
          setTimeout(function () {
            location.reload();
          }, 2000);
        } else {
        }
      } catch (error) {
        console.error(error);
      }
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
    async handleCreateStripeAccount(type = "presta") {
      try {
        const response = await stripeService.createAccount(
          type,
          this.devis.project_id,
          this.devis.id
        );
        if (response.status === 201) {
          location.href = response.data.url;
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

    isPaid(feature) {
      return feature.validation.identifier === "paid";
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
      // this.v$.$validate();
      // if (this.v$.$error) return;

      try {
        this.state.isLoadingCreateDelivery = true;
        const response = await featureService.createFeature(
          {
            name: this.state.name,
            devis_id: this.devis.id,
            price: this.state.price,
            deadline: this.state.deadline,
          },
          this.$i18n.locale
        );

        if (response.status === 201) {
          location.reload();
        }
      } catch (error) {
        console.error(error);
        this.state.errors = error.response.data.errors;
      } finally {
        this.state.isLoadingCreateDelivery = false;
      }
    },

    async handleInvitationClick() {
      // this.vEmail$.$validate();
      // if (this.vEmail$.$error) return;
      this.state.isLoadingInvite = true;
      this.state.isSendEmail = false;
      this.state.isSendEmailError = false;
      this.state.isSendEmailErrorCatch = false;
      try {
        const response = await inviteService.sendInvite(
          this.devis.project_id,
          {
            email: this.state.email,
            userId: this.$store.state.userStore.user.id,
            lead_id: this.devis.id,
          },
          this.$i18n.locale
        );
        if (response.data.success) {
          this.state.isSendEmail = true;
          this.state.errors = {};
        } else this.state.isSendEmailError = true;
      } catch (error) {
        this.state.isSendEmailErrorCatch = true;
        this.state.errors = error.response.data.errors;
        console.error(error);
      } finally {
        this.state.isLoadingInvite = false;
      }
    },
    // send lead conversation message
    async sendMessage() {
      let content = window.document.querySelector(".ql-editor").innerHTML;

      // // content = content.replace(/<p class="user-.*">.*<br.*>.*<\/p>/g, "");
      // const newHtml = content.replace(/<p class="user-\d+"><br><\/p>/g, "");

      // console.log(newHtml);

      // return;
      if (content) {
        this.state.isLoading = true;

        let message = content.replaceAll('contenteditable="true"', "");
        // let lol = message.match(/<p class="user-.*">.*<br.*>.*<\/p>/g);
        // console.log(lol);
        // return;
        // message = message.replaceAll(
        //   'style=" user-select: none;-webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none;-ms-user-select: none"',
        //   ""
        // );

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
          `<p class="user-${this.$store.state.userStore.user.id}" style="outline:none;"></p>`
        );
        this.state.content = oldContent;
        this.$refs.myEditor.setHTML(oldContent);
        //auth user content
        let authElements = window.document.querySelectorAll(
          `.user-${this.$store.state.userStore.user.id}`
        ); //matches all

        for (let i = 0; i < authElements.length; i++) {
          authElements[i].setAttribute("contenteditable", true);
        }

        //other user content

        let otherElements = window.document.querySelectorAll(
          `.ql-editor>p:not([class^='user-${this.$store.state.userStore.user.id}'])`
        ); //matches all

        for (let i = 0; i < otherElements.length; i++) {
          otherElements[i].setAttribute("contenteditable", false);
          otherElements[i].setAttribute(
            "style",
            "user-select:none;outline:none;"
          );
        }
      }

      //remove ql-disabled class in order to use toolbar
      var qlContainer = document.querySelector(".ql-container");
      qlContainer.classList.remove("ql-disabled");
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
