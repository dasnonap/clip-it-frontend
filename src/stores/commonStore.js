import { makeAutoObservable } from "mobx";
import { TOKEN_KEY } from "../enums";

class CommonStore {
  rootStore;
  accessToken = "";

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);

    this.loadTokenFromStorage();
  }

  updateToken(accessToken) {
    this.accessToken = accessToken;

    this.saveTokenToStorage();
  }

  loadTokenFromStorage() {
    this.accessToken = window.localStorage.getItem(TOKEN_KEY);
  }

  saveTokenToStorage() {
    window.localStorage.setItem(TOKEN_KEY, this.accessToken);
  }

  removeTokenFromStorage() {
    this.accessToken = "";

    window.localStorage.removeItem(TOKEN_KEY);
  }

  getToken() {
    return this.accessToken;
  }
}

export default CommonStore;
