import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    getFeaturesByUserId: async (userId) => {
        const response = await axios.get(`${APISettings.baseURL}/features/user/${userId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    getFeaturesById: async (projectId) => {
        const response = await axios.get(`${APISettings.baseURL}/features/${projectId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    getFeaturesByLeadId: async (leadId) => {
        const response = await axios.get(`${APISettings.baseURL}/features/lead/${leadId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    getFeaturesBySlug: async (leadSlug) => {
        const response = await axios.get(`${APISettings.baseURL}/features/${leadSlug}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    createFeature: async (feature) => {
        const response = await axios.post(`${APISettings.baseURL}/features`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    updateFeature: async (feature) => {
        const response = await axios.put(`${APISettings.baseURL}/features/${feature.id}`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    deleteFeature: async (featureId) => {
        const response = await axios.delete(`${APISettings.baseURL}/features/${featureId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    updateStepTwo: async (feature) => {
        const response = await axios.put(`${APISettings.baseURL}/features/validation/2/${feature.id}`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    updateStepThree: async (feature) => {
        const response = await axios.put(`${APISettings.baseURL}/features/validation/3/${feature.id}`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    updateStepfour: async (feature) => {
        const response = await axios.put(`${APISettings.baseURL}/features/validation/4/${feature.id}`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    downSteptwo: async (feature) => {
        const response = await axios.put(`${APISettings.baseURL}/features/unvalidation/3/${feature.id}`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    rejectStep: async (feature) => {
        const response = await axios.put(`${APISettings.baseURL}/features/validation/6/${feature.id}`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    downloadFile: async (feature) => {
        const response = await axios.get(`${APISettings.baseURL}/feature/${feature.id}/file/download`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    }
}