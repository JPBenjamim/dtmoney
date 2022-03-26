import axios from "axios";

export const api = axios.create({
    baseUrl: "http://localhost.com:3000/api",
})