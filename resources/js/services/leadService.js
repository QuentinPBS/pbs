import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    getLeadsByUserId: async (userId) => {
        const response = await axios.get(`${APISettings.baseURL}/leads/user/${userId}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    getLeadById: async (leadId) => {
        const response = await axios.get(`${APISettings.baseURL}/leads/${leadId}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    getLeadByProjectId: async (projectId) => {
        const response = await axios.get(`${APISettings.baseURL}/leads/project/${projectId}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    getLeadBySlug: async (leadSlug) => {
        const response = await axios.get(`${APISettings.baseURL}/leads/${leadSlug}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    createLead: async (lead) => {
        const response = await axios.post(`${APISettings.baseURL}/leads`, lead, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    updateLead: async (lead) => {
        const response = await axios.put(`${APISettings.baseURL}/leads/${lead.id}`, lead, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    },

    deleteLead: async (leadId) => {
        const response = await axios.delete(`${APISettings.baseURL}/leads/${leadId}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response;
    }
}