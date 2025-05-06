import {baseUrl} from "../utils/constants/constants.jsx";
import axios from "axios";

export const getOffersByGameId = async (gameId) => {
    if (gameId !== 'undefined') {
        const response = await axios.get(`${baseUrl}/api/offer/getOffersByGameId/${gameId}`, {withCredentials: true});
        return response.data;
    }
}

export const postOffersToCart = async (cartItem) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${baseUrl}/api/offer/addToCart`, cartItem,
        {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return response.data;
}