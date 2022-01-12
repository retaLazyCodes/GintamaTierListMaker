import axios from 'axios'
import { API_URL } from './settings'


const getAll = () => {
    const request = axios.get(API_URL)
    return request.then(response => response.data)
}


export const arcsService = {
    getAll,
}

