import { action, computed, makeObservable, observable } from "mobx";
import Client from "../api/Client";

class AuthStore{
  token = '';

  constructor() {
    makeObservable(this, {
        token: observable,
        setToken: action,
        getToken: computed,
        login: action,
        isAuthenticated: computed,
    });
  }

  setToken(token) {
    this.token = token;
  }

  get getToken() {
    return this.token;
  }

  login(data) {
    return Client.post('user.login', data)
        .then((response) => {
            const responseData = response.data;
     
            if (responseData.result == false) {
                return;
            }

            if (responseData.token.length > 0) {
                this.setToken(responseData.token);
            }
            return Promise.resolve(responseData);
        })
        .catch((error) => {
            return Promise.reject(error);
        })
  }

  get isAuthenticated(){
    return this.token.length > 0;
  }

}

export default new AuthStore();