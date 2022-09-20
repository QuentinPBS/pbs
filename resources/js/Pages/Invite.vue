<template>
    <div class="invite">
        <div class="invite_wrapper" v-if="!isLoaded">
            <p class="mb-11">{{ state.project.user.firstname }} {{ state.project.user.lastname }}  vous invite dans le projet <br /> <span class="font-bold text-3xl">{{ state.project.name }}</span></p>
            <div class="flex justify-center gap-5">
                <button class="btn btn-primary" @click="handleAccept">Accepter</button>
                <button class="btn btn-secondary" @click="handleDecline">Refuser</button>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import projectService from '../services/projectService';
import inviteService from '../services/inviteService';

    export default {
        name: 'Invite',

        setup() {
            const state = reactive({
                isLoaded: true,
                project: null,
                devis: null
            });

            return {
                state
            }
        },

        async created() {
            try {
                const projectId = this.$route.params.projectId;
                const userId = this.$route.params.userId;

                const response = await projectService.getProjectById(projectId);
                if (response.status === 200) {
                    this.state.project = response.data;
                }

                this.state.isLoaded = false;
                
            }catch (e) {
                    console.error(e.response)

                if (e.response.status === 401) {
                    this.$router.push('/');
                }
            }
        },

        methods: {
            handleAccept() {
                try {
                    inviteService.acceptedInvite(this.state.project.id, this.$store.state.userStore.user.id);
                    this.$router.push('/project/' + this.state.project.slug);
                } catch (e) {
                    console.error(e)
                }
            },
            handleDecline() {
            }
        }
    }
</script>

<style lang="scss" scoped>
.invite {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &_wrapper {
        text-align: center;
    }
}
 </style>