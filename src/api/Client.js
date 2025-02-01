import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

class Client {
    USER_ENDPOINT = "/user";
    LOGIN_ENDPOINT = this.USER_ENDPOINT + "/login";
    REGISTER_ENDPOINT = this.USER_ENDPOINT + "/register";

    endpoints = {
        'user': {
            'login': this.LOGIN_ENDPOINT, 
            'register': this.REGISTER_ENDPOINT,
        }
    };
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
        
        const fullUrl = this.constructPath(endpoint);

        return axios.post(
            fullUrl, data, headers
        );
    }

    get(){

    }

    constructPath(endpoint) {
        if (!endpoint.length) {
            return '';
        }

        const [domain, path] = endpoint.split('.');
        let apiPath = '';

        if (domain && domain.length) {
            if (path && path.length) {
                apiPath = this.endpoints[domain][path]; 
            } else if (this.endpoints[domain]['index'].length > 0) {
                apiPath = this.endpoints[domain]['index'];
            }
        }

        return apiUrl + apiPath;
    }   

}

export default new Client();