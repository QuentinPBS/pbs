
import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';
export default {
    importDeliveryFile: async (feature) => {
        const response = await axios.post(`${APISettings.baseURL}/feature/${feature.id}/file/import/`, feature, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });

        return response;
    }

}