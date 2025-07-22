import { makeAutoObservable } from "mobx";
import User from "../dto/User";
import RootStore from "./rootStore";

class UserStore {
  private user: any = null;
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setUser(userArray: any) {
    const user = new User(userArray);

    this.user = user;
  }

  getUser() {
    return this.user;
  }

  flush() {
    this.user = null;
  }
}

export default UserStore;
