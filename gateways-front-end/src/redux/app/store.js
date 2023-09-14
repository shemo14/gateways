import {configureStore} from "@reduxjs/toolkit";
import {gatewaysSlice} from "../features/Gateways/GatewaysSlice.js";
import {devicesSlice} from "../features/Devices/DevicesSlice.js";

export const store = configureStore({
    reducer: {
        gateways: gatewaysSlice.reducer,
        devices: devicesSlice.reducer
    }
})
