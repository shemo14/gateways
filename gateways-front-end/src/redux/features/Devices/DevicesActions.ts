import {
    getAllDevicesApi,
    setNewDeviceApi,
    deleteDeviceApi,
    getDeviceApi,
    updateDeviceApi
} from './DevicesRequests.js'
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getDevices =
    createAsyncThunk('Devices/getDevices', async () => {
    try {
        const response = await getAllDevicesApi();
        return response.data
    }catch (e) {
        return e;
    }
})

export const getDevice =
    createAsyncThunk('Devices/getDevice', async (id) => {
        try {
            const response = await getDeviceApi(id);
            return response.data
        }catch (e) {
            return e;
        }
    })

export const setNewDevice =
    createAsyncThunk('Devices/setNewDevice', async (data) => {
        try {
            const response = await setNewDeviceApi(data);
            return response.data
        }catch (e) {
            return e;
        }
    })

export const updateDevice =
    createAsyncThunk('Devices/updateDevice', async (data) => {
        try {
            const response = await updateDeviceApi(data);
            return response.data
        }catch (e) {
            return e;
        }
    })

export const deleteDevice =
    createAsyncThunk('Devices/deleteDevice', async (id) => {
        try {
            const response = await deleteDeviceApi(id);
            return response.data
        }catch (e) {
            return e;
        }
    })
