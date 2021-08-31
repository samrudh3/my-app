import axios from "axios";

const defaultUrl = 'https://hoblist.com/movieList';
// Add a request interceptor
const instance = axios
    .create({
        baseURL: defaultUrl
    })
export default instance