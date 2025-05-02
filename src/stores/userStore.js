import { makeObservable, observable, action, computed } from "mobx";
import User from "../api/User";

class UserStore {
  user = null;
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      user: observable,
      setUser: action,
      flush: action,
      getUser: computed,
    });
  }

  setUser(userArray) {
    const user = new User();
    user.createFromArray(userArray);

    this.user = user;
  }

  get getUser() {
    return this.user;
  }

  flush() {
    this.user = null;
  }
}

export default UserStore;
