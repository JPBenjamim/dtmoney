import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost.com:3000/api",
})