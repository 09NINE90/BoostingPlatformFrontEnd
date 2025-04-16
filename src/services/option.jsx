import {baseUrl} from "../utils/constants/constants.jsx";
import axios from "axios";

export const getOptions = async () => {
    const response = await axios.get(`${baseUrl}/api/offer/option/byOfferId/f6e1a183-0b6d-4f94-9e33-7a1b8e46050f`, {withCredentials: true});
    return response.data;
}