import axios from "axios";

const URL = "http://127.0.0.1:8000/api";

export const getAllNew = () => {
    return axios.get(`${URL}/new`);
}

export const getAllGame = () => {
    return axios.get(`${URL}/game`);
}

export const getAllType= () => {
    return axios.get(`${URL}/type`);
}

export const getAllTag= () => {
    return axios.get(`${URL}/tag`);
}

export const getAllVersion= () => {
    return axios.get(`${URL}/version`);
}

export const getGamePage = ({page}) => {
    return axios.get(`${URL}/game/game?page=${page}`);
}

export const getAppPage = ({page}) => {
    return axios.get(`${URL}/game/app?page=${page}`);
}

export const getGameOfType = ({id,page}) =>{
    return axios.get(`${URL}/game/getGameOfType?id=${id}&page=${page}`);
}