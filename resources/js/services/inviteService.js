import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    acceptedInvite: async (token) => {
        const response = await axios.get(`${APISettings.baseURL}/invites/accept/${token}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    sendInvite: async (projectId, data) => {
        const response = await axios.post(`${APISettings.baseURL}/invites/send/${projectId}`, data, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    getInvites: async (email) => {
        const response = await axios.get(`${APISettings.baseURL}/invites/get/${email}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    rejectInvite: async (token) => {
        const response = await axios.delete(`${APISettings.baseURL}/invites/reject/${token}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    }
}