import axiosClient from "../../../core/axios-client.js";

const getAllGatewaysApi = async () => await axiosClient.get('/gateways')
const setNewGatewayApi = async (data) => await axiosClient.post('/store-gateway', data)
const getGatewayApi = async (id) => await axiosClient.get(`/gateway/${id}`)
const updateGatewayApi = async (data) => await axiosClient.put('/update-gateway', data)
const deleteGatewayApi = async (id) => await axiosClient.delete(`/delete-gateway/${id}`)

export { getAllGatewaysApi, setNewGatewayApi, getGatewayApi, updateGatewayApi, deleteGatewayApi }
