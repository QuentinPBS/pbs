<template>
    <div class="devis-list">
        <div class="devis-list__header">
            <div class="devis-list__header__project">
                <h1>{{ project.name }}</h1>
                <p>{{ project.description }}</p>
            </div>
            <button class="btn btn-primary" @click="state.showModal = true">{{$t('create_quote')}}</button>
        </div>
        <div class="devis-list__content">
            <div class="devis-list__content__item" v-if="devis.length > 0">
                <router-link :to="`/project/${project.slug}/${item.slug}`" class="btn btn-wide"  v-for="item in devis">{{ item.name }}</router-link>
            </div>
            <div class="flex flex-col items-center w-full mt-28 gap-4" v-else>
                <img src="/images/logo_b&w.png" alt="logo paybystep">
                <p class="text-xl font-bold">{{$t('no_quote_found')}}</p>
                <button class="btn btn-primary" @click="state.showModal = true">{{$t('create_quote')}}</button>
            </div>
        </div>
        <vue-final-modal v-model="state.showModal" classes="modal-container" content-class="modal-content">
            <button class="modal__close" @click="state.showModal = false">X</button>
            <span class="modal__title">{{$t('create_quote')}}</span>
            <div class="modal__content">
                <div class="project-list__form">
                    <div class="form-control w-full">
                        <label class="label">{{$t('quote_name')}}</label>
                        <input type="text"
                            :class="[{ 'input-error': v$.name.$error }, 'input input-bordered rounded-md w-full']"
                            v-model="state.name" />
                        <label v-if="v$.name.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.name.$errors[0].$message }}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal__action">
                <button class="btn btn-link" @click="cancelForm()">{{$t('cancel')}}</button>
                <button @click="handleProjectClick" :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{
                        state.isLoading ? $t('loading') : $t('create')
                }}</button>
            </div>
        </vue-final-modal>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import LeadService from '../../services/leadService';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {
    name: 'DevisList',

    props: ['project', 'devis'],

    setup() {
        const state = reactive({
            showModal: false,
            name: '',
        })

        const rules = computed(() => {
            return {
                name: { required },
            }
        })

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$,
        }
    },

    components: {
        ModalsContainer,
        VueFinalModal
    },

    methods: {
        async handleProjectClick() {
            this.v$.$validate()
            if (this.v$.$error) return

            try {
                this.state.isLoading = true
                const response = await LeadService.createLead({
                    name: this.state.name,
                    project_id: this.project.id,
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

        cancelForm() {
            this.state.name = ''
            this.state.showModal = false
        },
    }
}
</script>

<style lang="scss" scoped>
.devis-list {
    min-height: 80vh;

    &__header {
        @apply flex justify-between items-center;

        &__project {
            @apply text-left;

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
            @apply flex gap-4 items-center mt-4;
        }
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