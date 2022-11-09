
import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';
export default {
    importDeliveryFile: async (feature) => {
        const response = await axios.post(`${APISettings.baseURL}/feature/${feature.id}/file/import/`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    importDeliveryLink: async (feature) => {
        const response = await axios.post(`${APISettings.baseURL}/feature/${feature.id}/link/import/`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    importDeliveryNullableFile: async (feature) => {
        const response = await axios.post(`${APISettings.baseURL}/feature/${feature.id}/nullable/import/`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    },

    fetchFeatureDelivery: async (feature) => {
        const response = await axios.get(`${APISettings.baseURL}/feature/${feature.id}/delivery`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    }



}