<template>
    <div class="login">
        <div class="login__block">
            <h1 class="login__title">Nouveau mot de passe</h1>
            <div class="login__form">
                <div v-if="state.error !== ''" class="alert alert-error shadow-xs">
                    <div>
                        <span>{{ state.error }}</span>
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
                    <button @click="handleLoginClick" :class="[{'loading': state.isLoading}, 'btn btn-primary']">{{ state.isLoading ? 'chargement' : 'Changer mon mot de passe' }}</button>
                </div>
            </div>
            <div class="divider">OU</div>
            <p><a class="underline text-primary" href="/login">Connectez-vous</a></p>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import UserService from '../services/userService'

export default {
    name: 'Login',

    setup () {
        const state = reactive({
            password: '',
            password_confirmation: '',
            isLoading: false,
            error: '',
        })

        const rules = computed(() => {
            return {
                password: [required, minLength(6), maxLength(50)],
                password_confirmation: [required, minLength(6), maxLength(50)],
            }
        })

        const v$ = useVuelidate(rules, state)

        return {
            state,
            v$,
        }
    },

    methods: {
        handleLoginClick: async function () {
            this.v$.$validate()
            if (this.v$.$error) return

            try {
                this.state.isLoading = true
                const response = await UserService.resetFormPasswordUser({email: this.$route.query.email, token: this.$route.query.token, password: this.state.password, password_confirmation: this.state.password_confirmation})

                if (response.status === 200) {
                    this.$router.push('/login')
                }
            } catch (e) {
                if (e.response.status === 400) {
                    this.state.error = 'Le token est invalide'
                } else if (e.response.status === 422) {
                    this.state.error = 'Les mots de passe ne correspondent pas'
                } else {
                    this.state.error = 'Une erreur est survenue'
                }
            } finally {
                this.state.isLoading = false
            }
        }
    }
}
</script>

<style lang="scss">
    .login {
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
        }
    }
    
</style>