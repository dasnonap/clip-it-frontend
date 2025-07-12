import { makeAutoObservable } from "mobx";
import Client from "../api/Client";

class AuthStore {
  token = "";
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);

    this.checkToken();
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  // actions
  login(data) {
    return Client.post("user.login", data, { withCredentials: true })
      .then((response) => {
        const responseData = response.data;

        if (responseData.result == false) {
          return;
        }

        if (responseData.token.length > 0) {
          this.setToken(responseData.token);

          this.rootStore.commonStore.updateToken(this.token);
        }

        if (responseData.user) {
          this.rootStore.userStore.setUser(responseData.user);
        }

        return Promise.resolve(responseData);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  register(data) {
    return Client.post("user.register", data)
      .then((response) => {
        const responseData = response.data;

        if (responseData.result == false) {
          return;
        }

        if (responseData.token.length > 0) {
          this.setToken(responseData.token);
        }

        if (responseData.user) {
          this.rootStore.userStore.setUser(responseData.user);
        }

        return Promise.resolve(responseData);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  logout() {
    this.setToken("");
    this.rootStore.commonStore.updateToken("")
  }

  isAuthenticated() {
    return this.token.length > 0;
  }

  checkToken() {
    let storedToken = this.rootStore.commonStore.getToken();

    if(!storedToken) 
      return;
    
    Client.post("user.validate", 
      {
        token: storedToken
      }
      )
      .then((response) => {
        const responseData = response.data;

        if (responseData.result == false) {
          return;
        }

        if (responseData.token.length > 0) {
          this.setToken(responseData.token);

          this.rootStore.commonStore.updateToken(this.token);
        }

        if (responseData.user) {
          this.rootStore.userStore.setUser(responseData.user);
        }
        
      })
      .finally(() => {
        return;
      })
      .catch((error) => {
        this.logout();
        console.error(error)
      })    
  }
}

export default AuthStore;
