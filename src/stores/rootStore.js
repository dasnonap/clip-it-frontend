import AuthStore from "./authStore";
import UserStore from "./userStore";

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;

export const authStore = rootStore.authStore;
export const userStore = rootStore.userStore;
