import { makeAutoObservable } from "mobx";
import commonEnum from "../enums/common";

class CommonStore {
  rootStore;
  accessToken = '';

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
    this.accessToken = window.localStorage.getItem(commonEnum.TOKEN_KEY);    
  }

  saveTokenToStorage() {
    window.localStorage.setItem(commonEnum.TOKEN_KEY, this.accessToken);
  }

  removeTokenFromStorage() {
    this.accessToken = "";

    window.localStorage.removeItem(commonEnum.TOKEN_KEY);
  }

  getToken() {
    return this.accessToken;
  }
}

export default CommonStore;
