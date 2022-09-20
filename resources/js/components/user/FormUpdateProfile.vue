<template>
    <div class="form-update-profile">
        <div class="form-update-profile__content">
            <div class="form-update-profile__content__title">
                <h1>Profile</h1>
            </div>
            <div class="form-update-profile__content__separator">
                <div class="form-update-profile__content__form">
                    <form action="">
                        <div class="form-control w-full mb-5">
                            <label class="label">Je suis</label>
                            <select v-model="state.status" @change="handleStatusChange"
                                class="select select-bordered w-full">
                                <option value="individual" selected>Particulier</option>
                                <option value="professional">Professionnel</option>
                            </select>
                            <label v-if="v$.status.$error" class="label">
                                <span class="label-text-alt text-red-400">{{ v$.status.$errors[0].$message }}</span>
                            </label>
                        </div>
                        <div class="register__form__flex">
                            <div class="form-control w-full mb-5">
                                <label class="label">Nom</label>
                                <input type="text"
                                    :class="[{ 'input-error': v$.lastname.$error }, 'input input-bordered rounded-md w-full']"
                                    v-model="state.lastname" />
                                <label v-if="v$.lastname.$error" class="label">
                                    <span class="label-text-alt text-red-400">{{ v$.lastname.$errors[0].$message
                                    }}</span>
                                </label>
                            </div>
                            <div class="form-control w-full mb-5">
                                <label class="label">Prénom</label>
                                <input type="text"
                                    :class="[{ 'input-error': v$.firstname.$error }, 'input input-bordered rounded-md w-full']"
                                    v-model="state.firstname" />
                                <label v-if="v$.firstname.$error" class="label">
                                    <span class="label-text-alt text-red-400">{{ v$.firstname.$errors[0].$message
                                    }}</span>
                                </label>
                            </div>
                        </div>
                        <div class="form-control w-full mb-5">
                            <label class="label">Email</label>
                            <input type="text" class="input input-bordered rounded-md w-full" v-model="state.email"
                                disabled />
                        </div>
                        <div class="register__form__flex" v-show="state.isProfessional">
                            <div class="form-control w-full mb-5">
                                <label class="label">Secteur d'activité</label>
                                <input type="text"
                                    :class="[{ 'input-error': v$.area.$error }, 'input input-bordered rounded-md w-full']"
                                    v-model="state.area" />
                                <label v-if="v$.area.$error" class="label">
                                    <span class="label-text-alt text-red-400">{{ v$.area.$errors[0].$message }}</span>
                                </label>
                            </div>
                            <div class="form-control w-full mb-5">
                                <label class="label">Siren</label>
                                <input type="text"
                                    :class="[{ 'input-error': v$.siren.$error }, 'input input-bordered rounded-md w-full']"
                                    v-model="state.siren" />
                                <label v-if="v$.siren.$error" class="label">
                                    <span class="label-text-alt text-red-400">{{ v$.siren.$errors[0].$message }}</span>
                                </label>
                            </div>
                        </div>
                        <div class="form-control w-full mt-6">
                            <button @click="handleUpdateClick()"
                                :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{ state.isLoading ?
                                        'chargement' : 'Modifier mon compte'
                                }}</button>
                        </div>
                    </form>
                </div>
                <div class="divider divider-horizontal"></div>
                <div class="form-update-profile__content__form">
                    <form-update-password />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { maxLength, minLength, required } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import userService from '../../services/userService';
import FormUpdatePasswordVue from './FormUpdatePassword.vue';

export default {
    name: 'FormUpdateProfile',

    props: ['user'],

    components: {
        'form-update-password': FormUpdatePasswordVue
    },

    setup() {
        const state = reactive({
            isProfessional: false,
            status: 'individual',
            lastname: '',
            firstname: '',
            email: '',
            area: '',
            siren: '',
            isLoading: false,
        });

        const rules = computed(() => {
            return {
                status: [required],
                lastname: [required],
                firstname: [required],
                area: [minLength(5), maxLength(5)],
                siren: [minLength(9), maxLength(9)],
            };
        })

        const v$ = useVuelidate(rules, state);

        return {
            state,
            v$
        }
    },

    created() {
        this.state.isProfessional = this.user.isProfessional;
        this.state.status = this.user.status;
        this.state.lastname = this.user.lastname;
        this.state.firstname = this.user.firstname;
        this.state.email = this.user.email;
        this.state.area = this.user.area;
        this.state.siren = this.user.siren;
    },

    methods: {
        handleStatusChange() {
            this.state.isProfessional = this.state.status === 'professional';
        },

        handleUpdateClick() {
            this.state.isLoading = true;
            try {
                const user = {
                    status: this.state.status,
                    lastname: this.state.lastname,
                    firstname: this.state.firstname,
                    email: this.state.email,
                    area: this.state.area,
                    siren: this.state.siren,
                    id: this.user.id
                };
                userService.updateUser(user)
            } catch (e) {
                this.state.isLoading = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.form-update-profile {
    &__content {
        &__title {
            & h1 {
                @apply text-left text-2xl font-bold;
            }
        }

        &__form {
            @apply flex-1
        }

        &__separator {
            @apply flex gap-5 justify-between;
        }
    }
}
</style>