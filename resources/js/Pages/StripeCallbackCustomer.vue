<template>
    <div class="devis" v-if="!state.isLoaded">
        <navbar />
        <breadcrumb
            :items="[
        { link: '/', name: 'Accueil' },
      ]"
        />
        <div class="wrapper">
            <div class="devis__content">
                <div v-if="loading" class="w-full px-16 md:px-0 h-screen flex items-center justify-center">
                    <img src="/images/loding-icon.gif" alt="">
                </div>
                <div v-if="isSuccess" class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                        <p class="">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="256" height="256"
                                         viewBox="0 0 64 64">
                                <radialGradient id="c0yjGprCnv9Gl20e9Vf6Ca" cx="32.5" cy="31.5" r="30.516" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"></stop><stop offset=".193" stop-color="#bbf1ff"></stop><stop offset=".703" stop-color="#d7f8ff"></stop><stop offset="1" stop-color="#e1faff"></stop></radialGradient><path fill="url(#undefined)" d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24 C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757 C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2 c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23 c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757 C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59 c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"></path><linearGradient id="c0yjGprCnv9Gl20e9Vf6Cb_118993_gr1" x1="32" x2="32" y1="6" y2="56" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#42d778"></stop><stop offset=".996" stop-color="#34b171"></stop><stop offset="1" stop-color="#34b171"></stop></linearGradient><path fill="url(#c0yjGprCnv9Gl20e9Vf6Cb_118993_gr1)" d="M57,31c0,13.805-11.195,25-25,25S7,44.805,7,31S18.195,6,32,6S57,17.195,57,31z"></path><path fill="#fff" d="M42.695,21.733L27.5,36.946l-5.235-5.22c-0.977-0.974-2.558-0.973-3.533,0.003l0,0 c-0.977,0.977-0.976,2.562,0.002,3.538l7.002,6.985c0.977,0.975,2.559,0.973,3.534-0.003l16.962-16.982 c0.975-0.977,0.975-2.559-0.001-3.535l0,0C45.254,20.756,43.671,20.756,42.695,21.733z"></path>
                            </svg>
                        </p>
                        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Votre compte est confirmé !</p>
                        <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center">Vous serez rediriger dans 5 secondes ...</p>
                    </div>
                </div>
                <div v-if="!isSuccess && !loading" class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                        <p class="">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAGwklEQVR4nO2dW2wdxRnHf9/usSNyDE0C5iJxqzCx3ZWgJK5xuAiSQBBUfagKCEpAAl5ogCcuUR8iihCIcJEioOUJhEodVZSLBIirEj+0Cg49hSJ15UuCEuUFYrdR5NhBxD778eBTmtTYO3s7e3x2fo/emW8+z//M7O7sN9+AxWKxWCwWi8ViKRqStwMLobu8FbQEq1BWotqN0IlwBkobsAxoqxWdBA4jTKIcRBlBZAhhlGnnM7nMP5Tff7EwDSWA7ulYwmFnHeqsB9YCPwWchGYD4J/ATiTYybJgp1y499ukvqZFQwigg12rcbgDuBVoz7i1wyjv4Dh/pGdohwiabXsLk5sAWlndQjB1G7AZ6MrFCZEhVJ/CKfdLzz+mc3Gh3g2q77UyNXM3yMPA+fVufx72gz5FufSSeP6xejZcVwH0066rgD8AP6lnuxHYQ8B90jf8Ub0arIsA+ql3JlSfBX5dj/ZSYDu4D0iv/3XWDWUugA52rsWRfuCsrNtKmXHQO6R35IMsG8lMAH0Nl/O6tiBsIfmjZF4o8DxO+cGsbtKZCKC+18ZU9U3g2izs1x3hI5a6vxLPn0zfdMroLm8Fpeq7wJq0bedMhenpn8vlX46laTRVAbTinUtQ/RhYmabdBmIUx71WevwDaRlMTQCtrDyNwPkreb1U1QtlL1q6Qvr+dTANc6ncHLWyeimB8zbN3vkAQgfOzLv6t86T0zCXWAAduLqETr1F8835C9HDEnldX8NNaij5CGg7+DuUDYntLDaUDZzf+UhSM4nuAbWXrI8h+S9hkRIQcH2SpYvYAtSWF74ATo9ro0kYA/fiuMsWpfjtVp8lh87v29K54PXBx0bq5Mn3nA7VZ4CNcSrHugfUVjVvjVO3SblNd3eui1MxsgDqe62IvEiDfE1rGERe1D0dS6JWiz4CpmbuRrU7cr3mZyWH3DujVookgFZWt4A8FLWRwiDyW/W91ihVoo2AYHIj8ONIdYrFuUxWI90bjQVQRRDH/vrDcGSzqvn90XwE/L1rjZ37DVDtZnf3pabFzQUQuT2WQ0VkNsbJsKgB6nutqN4U36OCIXqL6SOp2Qg4Or0eODWJT4VCWc5hx+jFzEyA2VhNSxQCd61JMdN7QKzX7ELjaDojQHd5K4CLEztUNJRLan23IOEjoCVYZVTO8v84lPSS8EKhaPN/580MXXjtHBMBAkKNWOYjDQHEChAbCY8SMZnbF1tQbSNxZliBcAGUVOJfColB35lMQVaA+KQgwP+2glqik4oAlgwxEeBI5l40L6F9ZwXIFitAzkyEFTB5CvoqFVeKiBC6h8BkKWI0FWeKiDIcViQ8NtRhJN9sCieSQ+xnAiTUWYN7gISqaJmPNASYdj5jNuWLJRoBM/J5WKFQAWrJjr5IxaUiIXxukijK9E14Z0J3ikcgRn1mJoAEOxI5U0QkSFGApS07gP8k8adgHGJ5dcCkoJEA4vnHEPlLMp+KhP7ZNC+d+R4x1VeBe+K6lCZjEy1se7+dwdEyAL0dR7l3wxjnnJpL1rG5BM6rpkWNw6hVESrdft4R0mMTLWx84TwmvjlxZ+wpJ1Xpv38/7SfP5ORZDZEheoY802SAxt8DRFA0eDq+Z+mw7f32OZ0PMPGNy7b3Mk64aEKgW6NkYoz2QcZp+xOwL6pPafLfaeeH2L13/mt14gBueXuUCpEEmM0apbmOAmnkvZnCE1Eza0X/JFkuvYTIUOR6KfGzC47Oe623Y/5rdWCUZTOvRK0UWQDx/GMo90A+a6SbNozzo6XVOX8/5aQqm64Zz8GjGqq/iZMSOUGuiK5+ckpDOX6kxLb32hncMxuwcemFU2y6Zpyz83sM7Zfe4VipCmyyjuQkStYROyxFev2vCfQWYO58UBwCAm5PkuA1UVyQ9I0MIPJkEhuLG308aZrj5IFZ+4YeQahbruUG4kP2jzya1EhiAeRmqkj5l8AnSW0tIiqU3Rvl5uTTr01bGZVGTFsJID2j/8Zxr4OmDmMZxXXXp9X5kHJwrvT4B5hx19Cc01GF6ekr08yaC1km7z5afaOJ0ll+SNm9MYvk3ZmEp4vnT7Jv+AaUR1ncIS0KPIdT/kUWnQ/2AIeFqMsBDplv0JC+kQFwVwGR1slzZju4F2Xd+ZDPIT6/B7x6thuB5jzE53jU91qZnLkLkc000jFWqltpK73c1MdYHc/3B7mJPJzbh36RIQLdilveXpiD3H4Ie5Rhg3DcYZ7rmM1RlO5hnugOllcH7GGehpxwnK1oF9CJcgaz+2/nHmcLR2rbgkZQGV4Mx9laLBaLxWKxWCyW4vEddhIYIuPr/sEAAAAASUVORK5CYII=">
                        </p>
                        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Une erreur est survenu !</p>
                        <p class="text-gray-500 mt-4 pb-4 border-b-2 text-center">Veuillez contacter notre support pour résoudre ce problème. Merci.</p>
                        <a href="/" class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                            </svg>
                            <span>Retour</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

import NavbarVue from "../components/Navbar.vue";
import BreadcrumbVue from "../components/Breadcrumb.vue";
import FeatureList from "../components/feature/FeatureList.vue";
import leadService from "../services/leadService";
import featuresService from "../services/featureService";
import leadConversationService from "../services/leadConversationService";
import stripeService from "../services/stripeService";
export default {
    name: "StripeCallback",
    components: {
        navbar: NavbarVue,
        breadcrumb: BreadcrumbVue,
    },

    data() {
        return {
            isSuccess: false,
            loading: true
        }
    },

    setup() {
        const state = reactive({
            isLoading: true,
            isSuccess: false
        });

        return {
            state,
        };
    },

    created() {
        this.state.isLoaded = true;
        this.loadData();
    },

    methods: {
        async loadData() {
            try {
                const accountId = this.$route.params.accountId;
                const projectId = this.$route.query.pid;
                const leadId = this.$route.query.lid;
                const stripeAccount = await stripeService.validateAccount(accountId);
                if (stripeAccount.status === 200 && stripeAccount.data.account.status === 'success') {
                    this.isSuccess = true;
                    this.loading = false;
                    setTimeout(function() {
                        console.log(localStorage.stripeRedirect);
                       window.location = (localStorage.stripeRedirect) ? localStorage.stripeRedirect : '/';
                    }, 5000);
                } else {
                    this.isSuccess = false;
                    this.loading = false;
                }
            } catch (e) {
                console.error(e);
                this.loading = false;
            } finally {
                this.state.isLoaded = false
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.devis {
    background-color: #eff0f2;
    height: 100vh;

    &__content {
        @apply w-full bg-white mt-5 p-5 rounded-xl shadow-md;
    }
}
</style>
