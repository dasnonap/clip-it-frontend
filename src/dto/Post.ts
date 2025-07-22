import User from "./User";
import Media from "./Media";

class Post {
  id: string;
  title: string;
  user: User;
  media: Media[];

  constructor(objectData: any) {
    this.id = objectData.id;
    this.title = objectData.title;
    this.user = new User(objectData.user);
    this.media = [];

    if (objectData.media.length > 0) {
      objectData.media.forEach((mediaItem: any) => {
        const media = new Media(mediaItem);

        this.media.push(media);
      });
    }

    return this;
  }
}

export default Post;
