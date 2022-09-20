export const userStore = {
    state: {
        user: null,
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    }
}