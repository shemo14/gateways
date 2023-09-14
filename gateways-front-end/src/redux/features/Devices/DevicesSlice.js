import {createSlice} from "@reduxjs/toolkit";
import {getDevices, getDevice} from "./DevicesActions";

const initialState = {
    allDevices: [],
    device: {}

}

export const devicesSlice = createSlice({
    name: 'Devices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDevices.fulfilled, (state, action) => {
            state.allDevices = action.payload.data;
        });
        builder.addCase(getDevice.fulfilled, (state, action) => {
            state.device = action.payload.data;
        });
    }
})
