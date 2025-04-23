import { baseUrl } from "../utils/constants/constants.jsx";
import axios from "axios";

export const getOptions = async (offerId) => {
    const response = await axios.get(`${baseUrl}/api/offer/option/byOfferId/${offerId}`, {
        withCredentials: true
    });
    return response.data;
};

export const getOfferData = async (offerId) => {
    const response = await axios.get(`${baseUrl}/api/offer/${offerId}`, {
        withCredentials: true
    });
    return response.data;
};