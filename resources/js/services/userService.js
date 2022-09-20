import axios from 'axios';
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {

    loginUser: async (user) => {
        const response = await axios.post('/api/auth/login', user);
        return response.data;
    },

    resetPasswordUser: async (email) => {
        const response = await axios.post(`${APISettings.baseURL}/password/email`, { email });
        return response.data;
    },

    resetFormPasswordUser: async (data) => {
        const response = await axios.post(`${APISettings.baseURL}/password/reset`, data);
        return response.data;
    },

    getUserCurrent: async () => {
        return await axios.get(`${APISettings.baseURL}/me`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
    },

    getUserById: async (userId) => {
        const response = await axios.get(`/api/user/${userId}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response.data;
    },

    getUsers: async () => {
        const response = await axios.get('/api/user', {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response.data;
    },

    createUser: async (user) => {
        const response = await axios.post('/api/user', user);
        return response.data;
    },

    updateUser: async (user) => {
        const response = await axios.put(`/api/user/${user.id}`, user, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response.data;
    },

    updatePassword: async (user) => {
        const response = await axios.put(`/api/user/password/update`, user, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        })
        return response.data;
    },

    deleteUser: async (userId) => {
        const response = await axios.delete(`/api/user/${userId}`, {
            headers: {'Authorization': 'Bearer ' + store.state.tokenStore.token}
        });
        return response.data;
    }
}