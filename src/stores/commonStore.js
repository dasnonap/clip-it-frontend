import { makeAutoObservable } from "mobx";

class CommonStore {
  token;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}

export default new CommonStore();
