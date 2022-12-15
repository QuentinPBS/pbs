<template>
<div>
    <div class="flex justify-end py-4 px-4">
     <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost">
            <p>{{ $i18n.locale }}</p>
          </label>
          <ul
            tabindex="0"
            class="
              mt-3
              p-2
              shadow
              menu menu-compact
              dropdown-content
              bg-base-100
              rounded-box
              w-52
            "
          >
            <li
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
            >
              <a @click.prevent="$i18n.locale = locale">{{
                locale.toUpperCase()
              }}</a>
            </li>
          </ul>
        </div>
    </div>
   
 <div class="login">
        <div class="login__block">
            <h1 class="login__title">{{$t('login.login')}}</h1>
            <div class="login__form">
                <div v-if="state.error !== ''" class="alert alert-error shadow-xs">
                    <div>
                        <span>{{ state.error }}</span>
                    </div>
                </div>
                <div class="form-control w-full">
                    <label class="label">Email</label>
                    <input type="text" v-on:keyup.enter="handleLoginClick" :class="[{'input-error': v$.email.$error }, 'input input-bordered rounded-md w-full']" v-model="state.email" />
                    <label v-if="v$.email.$error" class="label">
                        <span class="label-text-alt text-red-400">{{ v$.email.$errors[0].$message }}</span>
                    </label>
                </div>
                <div class="form-control w-full">
                    <label class="label">{{$t('login.password')}}</label>
                    <input type="password" v-on:keyup.enter="handleLoginClick" :class="[{'input-error': v$.password.$error }, 'input input-bordered rounded-md w-full']" v-model="state.password" />
                    <label v-if="v$.password.$error" class="label">
                        <span class="label-text-alt text-red-400">{{ v$.password.$errors[0].$message }}</span>
                    </label>
                </div>
                <div class="form-control w-full my-2">
                    <router-link class="underline text-primary text-left text-xs" to="/reset-password">{{$t('login.forgot_password_question')}}</router-link>
                </div>
                <div class="form-control w-full mt-6">
                    <button @click="handleLoginClick" :class="[{'loading': state.isLoading}, 'btn btn-primary']">{{ state.isLoading ? $t('loading') : $t('login.sign_in') }}</button>
                </div>
            </div>
            <div class="divider">{{$t('login.or')}}</div>
            <p>{{$t('login.no_account')}} 
                
                <router-link class="underline text-primary" to="/register">{{$t('login.sign_up')}}</router-link></p>
        </div>
    </div>
</div>
   
</template>

<script>
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { APISettings } from '../api/config';
import axios from 'axios';

export default {
    name: 'Login',

    setup () {
        const state = reactive({
            email: '',
            password: '',
            isLoading: false,
            error: ''
        })

        const rules = computed(() => {
            return {
                email: { required, email },
                password: { required, minLength: minLength(7) },
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
                const response = await axios.post(APISettings.baseURL + '/login', {
                    email: this.state.email,
                    password: this.state.password,
                })

                if (response.status === 200) {
                    this.$store.commit('SET_TOKEN', response.data.data.token)
                    this.$router.push('/')
                }

                
            } catch (e) {
                if (e.response.status === 401) {
                    this.state.error = 'Email ou mot de passe incorrect'
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