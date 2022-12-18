import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    getUserPayments: async (type) => {
        return await axios.get(`${APISettings.baseURL}/payments`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
    }
}
