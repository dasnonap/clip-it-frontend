import { makeAutoObservable } from "mobx";
import Client from "../api/Client";
import Post from "../api/Post";

class PostsStore {
    rootStore;
    posts = [];
    isLoading = false;
    error = null;


    constructor (rootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this)

        this.fetchPosts();
    }

    async fetchPosts () {
        this.isLoading = true;

        Client.get("posts.list")
        .then((response) => {
            if (response.data.items && response.status == 200) {
                let rawPosts = [];

                response.data.items.forEach((postData) => {
                    const post = new Post();
                    rawPosts.push(post.createFromArray(postData));
                });
                
                this.posts = rawPosts;
            }
        })
        .catch((error) => {
            this.error = error;
        })
        .finally(() => {
            this.isLoading = false
        });
    }

    addPost(post) {
        throw new Error("not implemented yet")
    }

    updatePost(post) {
        throw new Error("not implemented yet")
    }

    deletePost(post) {
        throw new Error("not implemented yet")
    }
}

export default PostsStore;