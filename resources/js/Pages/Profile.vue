<template>
    <div v-if="state.isLoaded" class="profile">
        <navbar />
        <breadcrumb />
        <div class="wrapper">
            <div class="profile__content">
                <form-update-profile :user="state.user" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import BreadcrumbVue from '../components/Breadcrumb.vue';
import NavbarVue from '../components/Navbar.vue';
import FormUpdateProfile from '../components/user/FormUpdateProfile.vue';
import userService from '../services/userService';

export default {
    name: 'Profile',

    components: {
        'navbar': NavbarVue,
        'breadcrumb': BreadcrumbVue,
        'form-update-profile': FormUpdateProfile,
    },

    setup() {
        const state = reactive({
            isLoaded: false,
            user: []
        });

        return {
            state
        }
    },

    async created() {
        try {
            const response = await userService.getUserCurrent();
            this.state.user = response.data.data.item;
            if (response.status === 401) {
                this.$store.commit('SET_USER', null)
                this.$store.commit('SET_TOKEN', null)
                window.location.href = '/login'
            }
        } catch(error) {
            console.error(error)
        } finally {
            this.state.isLoaded = true;
        }
    }
}
</script>

<style lang="scss">
.profile {
    background-color: #EFF0F2;
    height: 100vh;

    &__content {
        @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
    }
}
</style>