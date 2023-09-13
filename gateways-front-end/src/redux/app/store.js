import {configureStore} from "@reduxjs/toolkit";
import {gatewaysSlice} from "../features/Gateways/GatewaysSlice.js";

export const store = configureStore({
    reducer: {
        gateways: gatewaysSlice.reducer
    }
})
