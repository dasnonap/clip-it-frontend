import RootStore from "./rootStore";
const rootStore = new RootStore();

export default rootStore;

export const authStore = rootStore.authStore;
export const userStore = rootStore.userStore;
export const postsStore = rootStore.postsStore;
export const commonStore = rootStore.commonStore;
