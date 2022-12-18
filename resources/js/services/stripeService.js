import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    checkAccount: async (type) => {
        return await axios.get(`${APISettings.baseURL}/stripe/check/${type}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    },

    createAccount: async (type, project_id, lead_id) => {
        return await axios.post(`${APISettings.baseURL}/stripe/create`, {
            type: type,
            project_id: project_id,
            lead_id: lead_id
        }, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    },

    validateAccount: async (accountId, sessionId) => {
        return await axios.put(`${APISettings.baseURL}/stripe/validate`, {
            accountId: accountId,
            sessionId: sessionId
        }, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    },

    validateCustomerAccount: async (sessionId) => {
        return await axios.put(`${APISettings.baseURL}/stripe/validate/customer`, {
            sessionId: sessionId
        }, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    },

    getPaymentLink: async (project_id, lead_id, feature_id) => {
        return await axios.post(`${APISettings.baseURL}/stripe/payementLink`, {
            project_id: project_id,
            lead_id: lead_id,
            feature_id: feature_id
        }, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    },

    makePayment: async (feature_id) => {
        return await axios.post(`${APISettings.baseURL}/stripe/payment`, {
            feature_id: feature_id
        }, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    },
}
