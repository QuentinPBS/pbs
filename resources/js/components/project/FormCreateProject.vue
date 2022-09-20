<template>
    <form action="">
        <div class="login__form">
            <div class="form-control w-full">
                <label class="label">Nom du projet</label>
                <input type="text"
                    :class="[{ 'input-error': v$.name.$error }, 'input input-bordered rounded-md w-full']"
                    v-model="state.name" />
                <label v-if="v$.name.$error" class="label">
                    <span class="label-text-alt text-red-400">{{ v$.name.$errors[0].$message }}</span>
                </label>
            </div>
            <div class="form-control w-full">
                <label class="label">description</label>
                <input type="password"
                    :class="[{ 'input-error': v$.description.$error }, 'input input-bordered rounded-md w-full']"
                    v-model="state.description" />
                <label v-if="v$.description.$error" class="label">
                    <span class="label-text-alt text-red-400">{{ v$.description.$errors[0].$message }}</span>
                </label>
            </div>
            <div class="form-control w-full mt-6">
                <button @click="handleLoginClick" :class="[{ 'loading': state.isLoading }, 'btn btn-primary']">{{
                        state.isLoading ? 'loading' : 'login'
                }}</button>
            </div>
        </div>
    </form>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'FormCreateProject',
}
</script>

<style scoped>
</style>