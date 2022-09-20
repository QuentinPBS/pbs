export const projectStore = {
    state: {
        project: [],
    },

    mutations: {
        SET_PROJECT(state, project) {
            state.project = project
        }
    }
}