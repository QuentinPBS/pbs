import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    getLeadConversation: async (slug) => {
        const response = await axios.get(`${APISettings.baseURL}/lead/${slug}/messages`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    storeLeadConversationMessage: async (data, locale) => {
        const response = await axios.post(`${APISettings.baseURL}/lead/messages/create`, data, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token, 'locale': locale }
        });
        return response;
    },


}