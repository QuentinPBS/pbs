<template>
    <div class="register">
        <div class="register__block">
            <h1 class="register__title">Register</h1>
            <div class="register__form">
                <div v-if="state.isSuccess" class="alert alert-success shadow-sm">
                    <div>
                        <span>Veuillez confirmer votre adresse mail</span>
                    </div>
                </div>
                <div v-if="state.isError" class="alert alert-error shadow-sm">
                    <div>
                        <span>{{ state.errorMessage }}</span>
                    </div>
                </div>
                <div class="form-control w-full mb-5">
                    <label class="label">Je suis</label>
                    <select v-model="state.status" @change="handleStatusChange" class="select select-bordered w-full">
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
                        <input type="text" :class="[{'input-error': v$.lastname.$error }, 'input input-bordered rounded-md w-full']" v-model="state.lastname" />
                        <label v-if="v$.lastname.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.lastname.$errors[0].$message }}</span>
                        </label>
                    </div>
                    <div class="form-control w-full mb-5">
                        <label class="label">Prénom</label>
                        <input type="text" :class="[{'input-error': v$.firstname.$error }, 'input input-bordered rounded-md w-full']" v-model="state.firstname" />
                        <label v-if="v$.firstname.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.firstname.$errors[0].$message }}</span>
                        </label>
                    </div>
                </div>
                <div class="form-control w-full mb-5">
                    <label class="label">Email</label>
                    <input type="text" :class="[{'input-error': v$.email.$error }, 'input input-bordered rounded-md w-full']" v-model="state.email" />
                    <label v-if="v$.email.$error" class="label">
                        <span class="label-text-alt text-red-400">{{ v$.email.$errors[0].$message }}</span>
                    </label>
                </div>
                <div class="register__form__flex" v-show="state.isProfessional">
                    <div class="form-control w-full mb-5">
                        <label class="label">Secteur d'activité</label>
                        <input type="text" :class="[{'input-error': v$.area.$error }, 'input input-bordered rounded-md w-full']" v-model="state.area" />
                        <label v-if="v$.area.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.area.$errors[0].$message }}</span>
                        </label>
                    </div>
                    <div class="form-control w-full mb-5">
                        <label class="label">Siren</label>
                        <input type="text" :class="[{'input-error': v$.siren.$error }, 'input input-bordered rounded-md w-full']" v-model="state.siren" />
                        <label v-if="v$.siren.$error" class="label">
                            <span class="label-text-alt text-red-400">{{ v$.siren.$errors[0].$message }}</span>
                        </label>
                    </div>
                </div>
                 <div class="form-control w-full mb-5">
                    <label class="label">Mot de passe</label>
                    <input type="password" :class="[{'input-error': v$.password.$error }, 'input input-bordered rounded-md w-full']" v-model="state.password" />
                    <label v-if="v$.password.$error" class="label">
                        <span class="label-text-alt text-red-400">{{ v$.password.$errors[0].$message }}</span>
                    </label>
                </div>
                 <div class="form-control w-full mb-5">
                    <label class="label">Confirmation de mot de passe</label>
                    <input type="password" :class="[{'input-error': v$.password_confirmation.$error }, 'input input-bordered rounded-md w-full']" v-model="state.password_confirmation" />
                    <label v-if="v$.password_confirmation.$error" class="label">
                        <span class="label-text-alt text-red-400">{{ v$.password_confirmation.$errors[0].$message }}</span>
                    </label>
                </div>
                <div class="form-control w-full mt-6">
                    <button @click="handleRegisterClick" :class="[{'loading': state.isLoading}, 'btn btn-primary']">{{ state.isLoading ? 'chargement' : 'S\'enregistrer' }}</button>
                </div>
            </div>
            <div class="divider">OU</div>
            <p>Déja un compte ? <a class="underline text-primary" href="/login">Connectez-vous</a></p>
        </div>
    </div>
</template>

<script>
    import { reactive, computed } from 'vue';
    import useVuelidate from '@vuelidate/core';
    import { required, email, minLength, maxLength } from '@vuelidate/validators';

    import { APISettings } from '../api/config';
   

    export default {
        name: 'Register',

        setup () {
            const state = reactive({
                lastname: '',
                firstname: '',
                email: '',
                area: '',
                siren: '',
                password: '',
                password_confirmation: '',
                status: 'individual',
                isLoading: false,
                isProfessional: false,
                isSuccess: false,
                isError: false,
                errorMessage: '',
            });

            const rules = computed(() => {
                return {
                    status: [required],
                    lastname: [required],
                    firstname:[required],
                    email: [required, email],
                    password: [required, minLength(6), maxLength(50)],
                    password_confirmation: [required, minLength(6), maxLength(50)],
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

        methods: {
            handleStatusChange: function () {
                this.state.isProfessional = this.state.status === 'professional';
            },

            handleRegisterClick: async function () {
                this.state.isSuccess = false
                this.state.isError = false
                this.state.errorMessage = ""

                this.v$.$validate()
                if (this.v$.$invalid) return;

                try {
                    this.state.isLoading = true
                    const response = await axios.post(APISettings.baseURL + '/register', {
                        status: this.state.status,
                        lastname: this.state.lastname,
                        firstname: this.state.firstname,
                        email: this.state.email,
                        siren: this.state.siren,
                        password: this.state.password,
                        password_confirmation: this.state.password_confirmation,
                    })

                    if (response.status === 200) {
                        this.state.isSuccess = true
                    }
                } catch (e) {
                    if (e.response.status === 422) {
                        this.state.isError = true
                        this.state.errorMessage = e.response.data.message
                    }
                } finally {
                    this.state.isLoading = false
                }
            }
        },
    }
</script>

<style lang="scss">
    .register {
        @apply flex w-screen h-screen items-center justify-center bg-white;

        &__block {
            width: 450px;
            @apply p-6;
        }

        &__title {
            @apply text-center text-3xl font-bold;
        }

        &__form {
            @apply w-full mt-12;

            &__flex {
                @apply flex  gap-3;
            }
        }
    }
    
</style>