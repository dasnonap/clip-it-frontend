import { makeAutoObservable } from "mobx";
import User from "../dto/User";

class UserStore {
  user = null;
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setUser(userArray) {
    const user = new User();
    user.createFromArray(userArray);

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
