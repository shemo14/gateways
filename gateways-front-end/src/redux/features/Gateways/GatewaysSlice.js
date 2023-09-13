import {createSlice} from "@reduxjs/toolkit";
import {getGateways, getGateway} from "./GatewaysActions";

const initialState = {
    allGateways: [],
    gateway: {}

}

export const gatewaysSlice = createSlice({
    name: 'Gateways',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGateways.fulfilled, (state, action) => {
            state.allGateways = action.payload.data;
        });
        builder.addCase(getGateway.fulfilled, (state, action) => {
            state.gateway = action.payload.data;
        });
    }
})
