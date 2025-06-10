import User from "./User";
import Media from "./Media";

class Post {
  id = "";
  title = "";
  user = {};
  media = [];

  constructor() {}

  createFromArray(objectData) {
    if (Object.keys(objectData) < 1) {
      return;
    }

    const user = new User();

    this.id = objectData.id;
    this.title = objectData.title;
    this.user = user.createFromArray(objectData.user);

    if (objectData.media.length > 0) {
      objectData.media.forEach((mediaItem) => {
        const media = new Media();

        this.media.push(media.createFromArray(mediaItem));
      });
    }

    return this;
  }
}

export default Post;
