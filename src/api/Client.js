import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

class Client {

    /**
     * Sends POST Request to API to specified Endpoint 
     * @param {String} endpoint 
     * @param {Object} data 
     * @param {Object} headers 
     * @returns Promise
     */
    post(endpoint, data = {}, headers = {}) {
        if (!endpoint.length) {
            console.error('Please provide valid endpoint.');
            return;
        }

        return axios.post(
            apiUrl + endpoint, data, headers
        );
    }

    get(){

    }
}

export default new Client();