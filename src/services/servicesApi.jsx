import {baseUrl} from "../constants/constants.jsx";
import axios from "axios";

export const getAllServicesApi = async (requestData) => {
    const response = await axios.post(`${baseUrl}/services/getAllServices`, requestData, {withCredentials: true});
    return response.data.services;
}

export const addServiceApi = async (requestData) => {
    const response = await axios.post(`${baseUrl}/services/addNewService`, requestData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
    });

    return response.status;
}