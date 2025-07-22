import AuthStore from "./authStore";
import UserStore from "./userStore";
import PostsStore from "./postsStore";
import CommonStore from "./commonStore";

class RootStore {
  public commonStore: CommonStore;
  public authStore: AuthStore;
  public userStore: UserStore;
  public postsStore: PostsStore;

  constructor() {
    this.commonStore = new CommonStore(this);
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.postsStore = new PostsStore(this);
  }
}

export default RootStore;
