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
                  <div v-if="isPaidOrIsSuccess(feature)" class="text-sm">
                      <a href="#" @click="openDeliverableModal(feature)" class="text-success text-sm">Consulter les livrables</a>
                  </div>
              </div>
            </div>
            <div class="flex">
              <div>
                <span class="text-secondary text-sm" v-if="isWaiting(feature)"
                  >En attente de validation</span
                >
                <button
                  :class="[{ loading: state.isLoadingDelivery }, 'btn btn-primary']"
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
                <span class="text-danger text-sm" v-if="isSuccess(feature)">Confirmé</span>
                <span class="text-danger text-sm" v-if="isPaid(feature)">Paiement effectué</span>
              <button
                  class="btn btn-primary"
                  @click="openPaymentdModal(feature)"
                  v-if="isSuccessClient(feature) && feature.price > 0"
              >Effectuer le paiement</button>

                <span class="text-sm" v-if="isRejected(feature)">Refusée</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
          <img src="/images/logo_b&w.png" alt="logo paybystep" />
          <p class="text-xl font-bold">Vous n'avez aucune étape</p>
          <button
            class="btn btn-primary"
            @click="state.showModal = true"
            v-if="devis.is_owner"
          >
            Créer un étape
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
      <span class="modal__title">Créer une étape</span>
      <div class="modal__content">
        <div class="project-list__form">
          <div class="form-control w-full">
            <label class="label">Nom de l'étape</label>
            <input
              type="test"
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
              type="number"
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
          :class="[{ loading: state.isLoadingDelivery }, 'btn btn-primary']"
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
          v-model="state.showModalDeliverable"
          classes="modal-container"
          content-class="modal-content"
      >
          <div class="flex justify-between">
              <span class="modal__title">Consulter les livrables</span>
              <button class="" @click="state.showModalDeliverable = false">X</button>
          </div>

          <div class="modal__content">
              <ValidateDeliveredFeature
                  :feature="state.currentFeature"
                  v-if="state.showModalDeliverable"
                  v-on:closeModal="state.showModalDeliverable = false"
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
          <button class="" @click="state.showModalCreateStripeAccount = false">X</button>
      </div>

      <div class="modal__content">
          <p class="my-5">Pour recevoir votre paiement vous devez d'abord créer votre compte de paiement.</p>
      </div>
      <div class="modal__action">
          <button
              @click="state.showModalCreateStripeAccount = false"
              class="btn btn-bg-black-500 text-white mr-2"
          >
              Annuler
          </button>
          <button
              @click="handleCreateStripeAccount()"
              class="btn btn-primary"
          >
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
              <button class="" @click="state.showModalCreateStripeCustomerAccount = false">X</button>
          </div>

          <div class="modal__content">
              <p class="my-5">Pour effectuer votre paiement vous devez d'abord créer votre compte de paiement.</p>
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
              <button class="" @click="state.showPaymentSuccessModal = false">X</button>
          </div>

          <div class="modal__content">
              <p class="my-5 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                       width="100%" height="256"
                       viewBox="0 0 64 64">
                      <radialGradient id="c0yjGprCnv9Gl20e9Vf6Ca" cx="32.5" cy="31.5" r="30.516" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"></stop><stop offset=".193" stop-color="#bbf1ff"></stop><stop offset=".703" stop-color="#d7f8ff"></stop><stop offset="1" stop-color="#e1faff"></stop></radialGradient><path fill="url(#undefined)" d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24 C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757 C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23 c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757 C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59 c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"></path><linearGradient id="c0yjGprCnv9Gl20e9Vf6Cb_118993_gr1" x1="32" x2="32" y1="6" y2="56" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#42d778"></stop><stop offset=".996" stop-color="#34b171"></stop><stop offset="1" stop-color="#34b171"></stop></linearGradient><path fill="url(#c0yjGprCnv9Gl20e9Vf6Cb_118993_gr1)" d="M57,31c0,13.805-11.195,25-25,25S7,44.805,7,31S18.195,6,32,6S57,17.195,57,31z"></path><path fill="#fff" d="M42.695,21.733L27.5,36.946l-5.235-5.22c-0.977-0.974-2.558-0.973-3.533,0.003l0,0 c-0.977,0.977-0.976,2.562,0.002,3.538l7.002,6.985c0.977,0.975,2.559,0.973,3.534-0.003l16.962-16.982 c0.975-0.977,0.975-2.559-0.001-3.535l0,0C45.254,20.756,43.671,20.756,42.695,21.733z"></path>
                  </svg>
              </p>
              <p class="my-5 text-center">Votre paiement a été effectué avec succès.</p>
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

          <div class="modal__content" v-if="state.currentFeature && state.currentFeature.price">
              <p class="my-5">Pour valider et passer à l'étape suivante, il est necessaire d'effectuer le paiement de {{ state.currentFeature.price }} EUR au prestataire.</p>
          </div>
          <div class="modal__action">
              <button
                  @click="state.showPaymentModal = false"
                  class="btn btn-bg-black-500 text-white mr-2"
              >
                  Annuler
              </button>
              <button
                  @click="handlePayment()"
                  class="btn btn-primary"
              >
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
        <button
          @click="handleRejectStep()"
          :class="[{ loading: state.isLoadingDelivery }, 'btn btn-primary']"
        >
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
      showPaymentModal: false,
      showModalCreateStripeAccount: false,
        showModalCreateStripeCustomerAccount: false,
        showPaymentSuccessModal: false,
        showModalDeliverable: false,
      isSendEmail: false,
      isSendEmailError: false,
      isLoadingInvite: false,
      isLoadingDelivery:false,
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
    async openDelivredModal(feature) {
        try {
            const response = await stripeService.checkAccount(
                'presta'
            );
            if (response.data.exists === true) {
                this.state.currentFeature = feature;
                this.state.showModalDelivred = true;
            } else {
                localStorage.stripeRedirect = window.location.href;
                this.state.showModalCreateStripeAccount = true;
                console.log('Create stripe account ...');
            }
        } catch (error) {
            console.error(error);
        }
    },

    openIsDelivredModal(feature) {
      this.state.currentFeature = feature;
      this.state.showModalIsDelivred = true;
    },

      openDeliverableModal(feature) {
          this.state.currentFeature = feature;
          this.state.showModalDeliverable = true;
      },

    openRejectStepModal(feature) {
      this.state.rejectedStep = feature;
      this.state.showRejectStep = true;
    },

    async openPaymentdModal(feature) {
        this.state.currentFeature = feature;
        try {
            const response = await stripeService.checkAccount(
                'customer'
            );
            if (response.data.exists === true) {
                this.state.showPaymentModal = true;
            } else {
                localStorage.stripeRedirect = window.location.href;
                this.state.showModalCreateStripeCustomerAccount = true;
                console.log('Create stripe customer account ...');
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
              if (response.data.code == 'success') {
                  this.state.showPaymentModal = false;
                  this.state.showPaymentSuccessModal = true;
                  setTimeout(function() {
                      location.reload();
                  }, 2000);
              }
              else {

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
      this.state.isLoadingDelivery = true;
      try {
        const response = await featureService.rejectStep(
          this.state.rejectedStep
        );
        if (response.status === 200) {
          this.state.showRejectStep = false;
          this.$emit("rejectStep");
        }
      } catch (error) {
        this.state.isLoadingDelivery = false;
        console.error(error);
      }
    },

  async handleCreateStripeAccount(type = 'presta') {
      try {
          const response = await stripeService.createAccount(
              type, this.devis.project_id, this.devis.id
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
      if (feature.user_id === this.$store.state.userStore.user.id || feature.price === 0)
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
      return feature.validation.identifier === "rejected";
    },

      isPaidOrIsSuccess(feature) {
        return feature.validation.identifier === "success" || feature.validation.identifier === "paid";
      },

    async validateBtn(feature) {
      this.state.isLoadingDelivery = true;
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
        this.state.isLoadingDelivery = true;
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
        this.state.isLoadingDelivery = false;
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
