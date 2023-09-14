import {createBrowserRouter, Navigate} from "react-router-dom";
import Gateways from "./views/Gateways/index.jsx";
import AddGateway from "./views/AddGateway/index.jsx";
import UpdateGateway from "./views/UpdateGateway/index.jsx";
import NotFound from "./views/NotFound/index.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Devices from "./views/Devices/index.jsx";
import AddDevice from "./views/AddDevice/index.jsx";
import UpdateDevice from "./views/UpdateDevice/index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/gateways' />,
            },
            {
                path: '/gateways',
                element: <Gateways />
            },
            {
                path: '/add-gateway',
                element: <AddGateway />
            },
            {
                path: '/update-gateway/:id',
                element: <UpdateGateway />
            },
            {
                path: '/devices',
                element: <Devices />
            },
            {
                path: '/add-device',
                element: <AddDevice />
            },
            {
                path: '/update-device/:id',
                element: <UpdateDevice />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
