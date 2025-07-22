import { makeAutoObservable } from "mobx";
import { TOKEN_KEY } from "../enums";
import RootStore from "./rootStore";

class CommonStore {
  private rootStore: RootStore;
  private accessToken: string = "";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);

    this.loadTokenFromStorage();
  }

  updateToken(accessToken: string) {
    this.accessToken = accessToken;

    this.saveTokenToStorage();
  }

  loadTokenFromStorage() {
    this.accessToken = window.localStorage.getItem(TOKEN_KEY) ?? "";
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
