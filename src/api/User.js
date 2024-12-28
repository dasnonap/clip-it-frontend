import utils from '../helpers/utils.js';
import client from './Client.js';

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
                    utils.parseErrorResponse(error)
                );
            });
    }

    register(data){

    }
}

export default new User();