import axiosClient from "../../../core/axios-client.js";

const getAllDevicesApi = async () => await axiosClient.get('/devices')
const setNewDeviceApi = async (data) => await axiosClient.post('/store-device', data)
const getDeviceApi = async (id) => await axiosClient.get(`/device/${id}`)
const updateDeviceApi = async (data) => await axiosClient.put('/update-device', data)
const deleteDeviceApi = async (id) => await axiosClient.delete(`/delete-device/${id}`)

export { getAllDevicesApi, setNewDeviceApi, getDeviceApi, updateDeviceApi, deleteDeviceApi }
