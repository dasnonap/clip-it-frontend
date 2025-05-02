import { makeAutoObservable } from "mobx";

class CommonStore {
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

export default new CommonStore();
