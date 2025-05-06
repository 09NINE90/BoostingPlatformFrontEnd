import {baseUrl} from "../utils/constants/constants.jsx";
import axios from "axios";

export const getAllGamesApi = async () => {
    const response = await axios.get(`${baseUrl}/api/games/getAllGames`, {withCredentials: true});
    return response.data;
}

export const getGameByIdApi = async (gameId) => {
    const response = await axios.get(`${baseUrl}/api/games/getBySecondId/${gameId}`, {withCredentials: true});
    return response.data;
}

export const getAllGamesByPageApi = async (requestData) => {
    const response = await axios.post(`${baseUrl}/games/getAllGamesByPage`, requestData, {withCredentials: true});
    return response.data.games;
}

export const addGameApi = async (requestData) => {
    const response = await axios.post(`${baseUrl}/games/addNewGame`, requestData,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
    });
    return response.data;
}
