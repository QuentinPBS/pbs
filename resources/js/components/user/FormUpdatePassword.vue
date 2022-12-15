<template>
    <div >
        <div class="form-control w-full mb-5">
            <label class="label">{{$t('profile.password')}}</label>
            <input type="password"
                :class="[{ 'input-error': v$.password.$error }, 'input input-bordered rounded-md w-full']"
                v-model="state.password" />
            <label v-if="v$.password.$error" class="label">
                <span class="label-text-alt text-red-400">{{ v$.password.$errors[0].$message }}</span>
            </label>
        </div>
        <div class="form-control w-full mb-5">
            <label class="label">{{$t('profile.password_confirmation')}}</label>
            <input type="password"
                :class="[{ 'input-error': v$.password_confirmation.$error }, 'input input-bordered rounded-md w-full']"
                v-model="state.password_confirmation" />
            <label v-if="v$.password_confirmation.$error" class="label">
                <span class="label-text-alt text-red-400">{{
                        v$.password_confirmation.$errors[0].$message
                }}</span>
            </label>
        </div>
        <div class="form-control w-full mt-6">
            <button @click="handleChangePassword" :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{
                    state.isLoading ?
                        $t('loading') : $t('profile.edit_password')
            }}</button>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import userService from '../../services/userService';

    export default {
        name: 'FormUpdatePassword',

        setup() {
            const state = reactive({
                password: '',
                password_confirmation: '',
                isLoading: false,
            });

            const rules = computed(() => {
                return {
                    password: required,
                    password_confirmation: {
                        required,
                        validate: value => value === state.password,
                    },
                };
            });

            const v$ = useVuelidate(rules, state);

            return { state, v$}
        },

        methods: {
            handleChangePassword() {
                try {
                    userService.updatePassword({password: this.state.password})
                } catch (e) {
                    this.state.isLoading = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>