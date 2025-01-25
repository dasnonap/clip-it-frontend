import client from './Client.js';
import { parseErrorResponse } from '../helpers/utils';

class User{
    USER_ENDPOINT  = '/user';
    LOGIN_ENDPOINT = this.USER_ENDPOINT + '/login';
    REGISTER_ENDPOINT = this.USER_ENDPOINT + '/register';
        
    /**
     * Send Login Request
     */
    async login(data) {
        await client.post(this.LOGIN_ENDPOINT, data)
            .then((response) => {
                console.log('success', response);
            })
            .catch((error) => {
                throw new Error(
                    parseErrorResponse(error)
                );
            });
    }

    register(data){

    }
}

export default new User();