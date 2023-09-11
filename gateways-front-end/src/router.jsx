import {createBrowserRouter, Navigate} from "react-router-dom";
import Gateways from "./views/Gateways/index.jsx";
import AddGateway from "./views/AddGateway/index.jsx";
import UpdateGateway from "./views/UpdateGateway/index.jsx";
import NotFound from "./views/NotFound/index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/gateways' />
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
        path: '/update-gateway',
        element: <UpdateGateway />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
