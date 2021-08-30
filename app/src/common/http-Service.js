import axios from "axios";

const defaultUrl = 'https://api.vyasankhya.com/ups/';
// Add a request interceptor
const instance = axios
    .create({
        baseURL: defaultUrl
    })