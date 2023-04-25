import axios from "axios";

const URL = "http://127.0.0.1:8000/api";

export const getAllNew = () => {
    return axios.get(`${URL}/new`);
}

export const getAllGame = () => {
    return axios.get(`${URL}/game`);
}