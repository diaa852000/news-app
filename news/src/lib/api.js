import axios from "axios";
import { BASE_URL } from "../utils/apiConstants";

const _http = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export const apiGET = async (endpoint) => {
    try {
        let response = await _http.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}



export default _http;

