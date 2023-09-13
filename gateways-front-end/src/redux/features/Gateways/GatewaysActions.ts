import {
    getAllGatewaysApi,
    setNewGatewayApi,
    deleteGatewayApi,
    getGatewayApi,
    updateGatewayApi
} from './GatewaysRequests.js'
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getGateways =
    createAsyncThunk('Gateways/getGateways', async () => {
    try {
        const response = await getAllGatewaysApi();
        return response.data
    }catch (e) {
        return e;
    }
})

export const getGateway =
    createAsyncThunk('Gateways/getGateway', async (id) => {
        try {
            const response = await getGatewayApi(id);
            return response.data
        }catch (e) {
            return e;
        }
    })

export const setNewGateway =
    createAsyncThunk('Gateways/setNewGateway', async (data) => {
        try {
            const response = await setNewGatewayApi(data);
            return response.data
        }catch (e) {
            return e;
        }
    })

export const updateGateway =
    createAsyncThunk('Gateways/updateGateway', async (data) => {
        try {
            const response = await updateGatewayApi(data);
            return response.data
        }catch (e) {
            return e;
        }
    })

export const deleteGateway =
    createAsyncThunk('Gateways/deleteGateway', async (id) => {
        try {
            const response = await deleteGatewayApi(id);
            return response.data
        }catch (e) {
            return e;
        }
    })
