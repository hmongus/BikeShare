import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    withCredentials: true
})

export default httpInstance;