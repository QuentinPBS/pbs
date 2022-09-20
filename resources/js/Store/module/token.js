export const tokenStore = {
    state: {
        token: '',
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        }
    }
}