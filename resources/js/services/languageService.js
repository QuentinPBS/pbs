import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';


export default {
    switchLanguage: async (data) => {
         
        const response = await axios.post(`/api/language/set`, data, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token  }
        });
        return response;
    },

}