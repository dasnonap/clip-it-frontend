import { makeAutoObservable } from "mobx";
import Client from "../api/Client";
import Post from "../dto/Post";
import { ApiEndpoints } from "../enums";
import RootStore from "./rootStore";

class PostsStore {
  public rootStore: RootStore;
  posts = [];
  isLoading = false;
  error = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);

    this.fetchPosts();
  }

  async fetchPosts() {
    this.isLoading = true;

    Client.get(ApiEndpoints.POSTS_LISTING)
      .then((response) => {
        if (response.data.items && response.status == 200) {
          response.data.items.forEach((postData) => {
            const post = new Post();
            this.posts.push(post.createFromArray(postData));
          });
        }
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  addPost(post) {
    throw new Error("not implemented yet");
  }

  updatePost(post) {
    throw new Error("not implemented yet");
  }

  deletePost(post) {
    throw new Error("not implemented yet");
  }
}

export default PostsStore;
