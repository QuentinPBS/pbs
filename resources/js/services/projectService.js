import axios from 'axios'
import store from "../Store/index"
import { APISettings } from '../api/config';

export default {
    getProjectsByUserId: async (userId) => {
        const response = await axios.get(`/api/projects/user/${userId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    getProjectsByClientId: async (userId) => {
        const response = await axios.get(`/api/projects/client/${userId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    getProjectById: async (projectId) => {
        const response = await axios.get(`/api/projects/show/${projectId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    getProjectBySlug: async (projectSlug) => {
        const response = await axios.get(`${APISettings.baseURL}/projects/${projectSlug}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    getArchivedProjects: async (page) => {
        const response = await axios.get(`${APISettings.baseURL}/user/projects/archived?page=${page}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    createProject: async (project) => {
        const response = await axios.post(`${APISettings.baseURL}/projects`, project, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    updateProject: async (project) => {
        const response = await axios.put(`/api/projects/${project.id}`, project, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },

    deleteProject: async (projectId) => {
        const response = await axios.delete(`/api/projects/${projectId}`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },
    archiveProject: async (body) => {
        const response = await axios.post(`/api/user/project/${body.project_id}/archive`, body, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    },
    unarchiveProject: async (project_id) => {
        const response = await axios.delete(`/api/user/project/${project_id}/unarchive`, {
            headers: { 'Authorization': 'Bearer ' + store.state.tokenStore.token }
        });
        return response;
    }
}