import { action, computed, makeObservable, observable } from "mobx";
import Client from "../api/Client";

class AuthStore {
  token = "";
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      token: observable,
      setToken: action,
      getToken: computed,
      login: action,
      register: action,
      logout: action,
      isAuthenticated: computed,
    });
  }

  setToken(token) {
    this.token = token;
  }

  get getToken() {
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
        }

        if (responseData.user) {
          this.rootStore.userStore.setUser(responseData.user);
        }

        console.log(response);

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
    // remove userStore data too
  }

  // computes
  get isAuthenticated() {
    return this.token.length > 0;
  }
}

export default AuthStore;
