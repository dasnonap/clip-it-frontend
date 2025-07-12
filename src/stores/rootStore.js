import AuthStore from "./authStore";
import UserStore from "./userStore";
import PostsStore from "./postsStore";
import CommonStore from "./commonStore";

class RootStore {
  constructor() {
    this.commonStore = new CommonStore(this);
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.postsStore = new PostsStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;

export const authStore = rootStore.authStore;
export const userStore = rootStore.userStore;
export const postsStore = rootStore.postsStore;
export const commonStore = rootStore.commonStore;
