<template>
    <div class="devis-list">
        <div class="devis-list__header">
            <div class="devis-list__header__project">
                <h1>{{ devis.name }}</h1>
                <button v-if="devis.user_id === this.$store.state.userStore.user.id" class="btn btn-primary"
                    @click="state.showModal = true">Créer une étape</button>
            </div>
            <button v-if="devis.user_id === this.$store.state.userStore.user.id" class="btn btn-primary"
                @click="state.showModalShare = true">Partager</button>
        </div>
        <div class="grid grid-cols-2 gap-6">
            <div class="devis-list__content">
                <div class="devis-list__content__item" v-if="features.length > 0">
                    <div class="w-full bg-gray-100 text-left flex justify-between items-center rounded shadow-md p-3"
                        v-for="feature in features">
                        <div class="flex gap-3 items-center">
                            <div class="p-2 bg-secondary text-white rounded font-bold">{{ feature.price }}€</div>
                            <div>
                                <div class="text-lg">{{ feature.name }}</div>
                                <div class="text-sm"><span class="font-bold">Deadline</span>: {{ feature.deadline }}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span class="text-secondary text-sm" v-if="isWaiting(feature)">En attente de
                                validation</span>
                            <button class="btn btn-primary" @click="validateBtn(feature)"
                                v-if="isWaitingClient(feature)">Valider</button>
                            <button class="btn btn-primary" @click="openDelivredModal(feature)"
                                v-if="isValidated(feature)">Délivrer</button>
                            <span class="text-secondary text-sm" v-if="isValidatedClient(feature)">En attente de
                                délivrable</span>
                            <span class="text-red-500 text-sm" v-if="isCanceled(feature)">Non validée</span>
                            <span class="text-danger text-sm" v-if="isCanceledClient(feature)">Non validée</span>
                            <span class="text-secondary text-sm" v-if="isDelivered(feature)">En attente de
                                confirmation</span>
                            <button class="btn btn-primary" @click="openIsDelivredModal(feature)" v-if="isDeliveredClient(feature)">Valider les délivrables</button>
                            <span class="text-danger text-sm" v-if="isSuccess(feature)">Confirmé</span>
                            <span class="text-sm" v-if="isSuccessClient(feature)">Acceptée</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
                    <img src="/images/logo_b&w.png" alt="logo paybystep">
                    <p class="text-xl font-bold">Vous n'avez aucune étape</p>
                    <button class="btn btn-primary" @click="state.showModal = true">Créer un étape</button>
                </div>
            </div>
            <div class="devis-list__description">
                <p>Description</p>
                <QuillEditor theme="snow" :options="state.options" v-model:content="state.content" />
                <button @click="test">save</button>
            </div>
        </div>

        <vue-final-modal v-model="state.showModal" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="state.showModal = false">X</button>
            <span class="modal__title">Créer une étape</span>
            <div class="modal__content">
                <div class="project-list__form">
                    <div class="form-control w-full">
                        <label class="label">Nom de l'étape</label>
                        <input type="text"
                            :class="[{ 'input-error': v$.name.$error }, 'input input-bordered rounded-md w-full']"
                            v-model="state.name" />
                        <label v-if="v$.name.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.name.$errors[0].$message }}</span>
                        </label>
                    </div>
                    <div class="form-control w-full">
                        <label class="label">Prix</label>
                        <input type="text"
                            :class="[{ 'input-error': v$.price.$error }, 'input input-bordered rounded-md w-full']"
                            v-model="state.price" />
                        <label v-if="v$.price.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.price.$errors[0].$message }}</span>
                        </label>
                    </div>
                    <div class="form-control w-full">
                        <label class="label">Deadline</label>
                        <input type="date"
                            :class="[{ 'input-error': v$.deadline.$error }, 'input input-bordered rounded-md w-full']"
                            v-model="state.deadline" :min="new Date().toISOString().split('T')[0]" />
                        <label v-if="v$.deadline.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.deadline.$errors[0].$message }}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal__action">
                <button class="btn btn-link" @click="cancelForm()">Annuler</button>
                <button @click="handlePFeatureClick" :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{
                        state.isLoading ? 'loading' : 'Créer'
                }}</button>
            </div>
        </vue-final-modal>

        <vue-final-modal v-model="state.showModalShare" classes="modal-container" content-class="modal-content">
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
                        <input type="email"
                            :class="[{ 'input-error': vEmail$.email.$error }, 'input input-bordered rounded-md w-full']"
                            v-model="state.email" />
                        <label v-if="vEmail$.email.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ vEmail$.email.$errors[0].$message }}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal__action">
                <button class="btn btn-link" @click="cancelFormInvite()">Annuler</button>
                <button @click="handleInvitationClick" :class="[{ 'loading': state.isLoadingInvite }, 'btn btn-primary']">{{
                        state.isLoadingInvite ? 'loading' : 'Envoyer le lien'
                }}</button>
            </div>
        </vue-final-modal>
        <vue-final-modal v-model="state.showModalDelivred" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="state.showModal = false">X</button>
            <span class="modal__title">Délivrer la feature (Bétat Test)</span>
            <div class="modal__content">
                <p class="my-5">Merci d'envoyer votre justificatif d'étape directement à votre client (mail, sms,
                    whatsapp, pigeon voyageur, signal de fumée ...). Nous développons actuellement l'hébergement des
                    preuves.</p>
            </div>
            <div class="modal__action">
                <button class="btn btn-link" @click="state.showModalDelivred = false">Annuler</button>
                <button @click="delivredBtn()" :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{
                        state.isLoading ? 'loading' : ' Ok j\'ai compris'
                }}</button>
            </div>
        </vue-final-modal>
        <vue-final-modal v-model="state.showModalIsDelivred" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="state.showModal = false">X</button>
            <span class="modal__title">Vérification du Délivrable</span>
            <div class="modal__content">
                <p class="my-5">Merci de vérifier les délivrable avant de valider. Nous développons actuellement l'hébergement des
                    preuves.</p>
            </div>
            <div class="modal__action">
                <button @click="cancelIsDelivry()" :class="[{ 'loading': state.isLoading }, 'btn btn-link']">{{
                        state.isLoading ? 'loading' : ' Refuser'
                }}</button>
                <button @click="approvedIsDelivry()" :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{
                        state.isLoading ? 'loading' : ' Accepter'
                }}</button>
            </div>
        </vue-final-modal>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import featureService from '../../services/featureService';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import inviteService from '../../services/inviteService';
export default {
    name: 'DevisList',

    props: ['devis', 'features'],

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
            name: '',
            email: '',
            deadline: new Date().toISOString().split('T')[0],
            price: 0,
            content: {},
            options: {
                modules: {
                    toolbar: ['bold', 'italic', 'underline']
                },
                readOnly: false,
                theme: 'snow'
            },
            currentFeature: null
        })

        const rules = computed(() => {
            return {
                name: { required },
                deadline: { required },
                price: { required },
            }
        })

        const rulesEmail = computed(() => {
            return {
                email: { email },
            }
        })

        const v$ = useVuelidate(rules, state)
        const vEmail$ = useVuelidate(rulesEmail, state)

        return {
            state,
            v$,
            vEmail$
        }
    },

    components: {
        ModalsContainer,
        VueFinalModal,
        QuillEditor
    },

    computed: {
        test() {
            return `${process.env.MIX_APP_URL}/invite/${this.devis.project_id}/${this.devis.user_id}`
        },
    },

    methods: {


        openDelivredModal(feature) {
            this.state.currentFeature = feature
            this.state.showModalDelivred = true
        },

        openIsDelivredModal(feature) {
            this.state.currentFeature = feature
            this.state.showModalIsDelivred = true
        },

        async cancelIsDelivry() {
            try {
                const response = await featureService.downSteptwo(this.state.currentFeature)
                if (response.status === 200) {
                    location.reload();
                }
            } catch (error) {
                console.error(error)
            }
        },

        async approvedIsDelivry() {
            try {
                const response = await featureService.updateStepfour(this.state.currentFeature)
                if (response.status === 200) {
                    location.reload();
                }
            } catch (error) {
                console.error(error)
            }
        },

        cancelForm() {
            this.state.name = ''
            this.state.price = 0
            this.state.deadline = new Date().toISOString().split('T')[0]
            this.state.showModal = false
            
        },

        cancelFormInvite() {
            this.state.email = ''
            this.state.showModalShare = false
            this.state.isSendEmail = false
            this.state.isSendEmailError = false
            this.state.isSendEmailErrorCatch = false
        },

        isWaiting(feature) {
            if (feature.user_id === this.$store.state.userStore.user.id) return feature.validation.identifier === 'waiting'
            else return false
        },

        isWaitingClient(feature) {
            if (feature.user_id !== this.$store.state.userStore.user.id) return feature.validation.identifier === 'waiting'
            else return false
        },

        isValidated(feature) {
            if (feature.user_id === this.$store.state.userStore.user.id) return feature.validation.identifier === 'validated'
            else return false
        },

        isValidatedClient(feature) {
            if (feature.user_id !== this.$store.state.userStore.user.id) return feature.validation.identifier === 'validated'
            else return false
        },

        isCanceled(feature) {
            if (feature.user_id === this.$store.state.userStore.user.id) return feature.validation.identifier === 'canceled'
            else return false
        },

        isCanceledClient(feature) {
            if (feature.user_id !== this.$store.state.userStore.user.id) return feature.validation.identifier === 'canceled'
            else return false
        },

        isDelivered(feature) {
            if (feature.user_id === this.$store.state.userStore.user.id) return feature.validation.identifier === 'delivered'
            else return false
        },

        isDeliveredClient(feature) {
            if (feature.user_id !== this.$store.state.userStore.user.id) return feature.validation.identifier === 'delivered'
            else return false
        },

        isSuccess(feature) {
            if (feature.user_id === this.$store.state.userStore.user.id) return feature.validation.identifier === 'success'
            else return false
        },

        isSuccessClient(feature) {
            if (feature.user_id !== this.$store.state.userStore.user.id) return feature.validation.identifier === 'success'
            else return false
        },

        async validateBtn(feature) {
            try {
                const response = await featureService.updateStepTwo(feature)
                if (response.status === 200) {
                    location.reload();
                }
            } catch (error) {
                console.error(error)
            }
        },

        async delivredBtn() {
            try {
                const response = await featureService.updateStepThree(this.state.currentFeature)
                if (response.status === 200) {
                    location.reload();
                }
            } catch (error) {
                console.error(error)
            }
        },

        async handlePFeatureClick() {
            this.v$.$validate()
            if (this.v$.$error) return

            try {
                this.state.isLoading = true
                const response = await featureService.createFeature({
                    name: this.state.name,
                    devis_id: this.devis.id,
                    price: this.state.price,
                    deadline: this.state.deadline
                })

                if (response.status === 201) {
                    location.reload();
                }
            } catch (error) {
                console.error(error)
            } finally {
                this.state.isLoading = false
            }
        },

        async handleInvitationClick() {
            this.vEmail$.$validate()
            if (this.vEmail$.$error) return
            this.state.isLoadingInvite = true
            this.state.isSendEmail = false
            this.state.isSendEmailError = false
            this.state.isSendEmailErrorCatch = false
            try {
                const response = await inviteService.sendInvite(this.devis.project_id, { email: this.state.email, userId: this.$store.state.userStore.user.id })
                if (response.data.success) this.state.isSendEmail = true
                else this.state.isSendEmailError = true
                
            } catch (error) {
                this.state.isSendEmailErrorCatch = true
                console.error(error)
            } finally {
                this.state.isLoadingInvite = false
            }
        }
    },

}
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