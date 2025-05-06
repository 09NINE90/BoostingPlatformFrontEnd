import {baseUrl} from "../utils/constants/constants.jsx";
import axios from "axios";

export const getOffersByGameId = async (gameId) => {
    if (gameId !== 'undefined') {
        const response = await axios.get(`${baseUrl}/api/offer/getOffersByGameId/${gameId}` ,{withCredentials: true});
        return response.data;
    }
}