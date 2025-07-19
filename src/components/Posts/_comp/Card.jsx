import { useState } from "react";
import ImageSceletonLoader from "../../_comp/Loaders/ImageSceletonLoader";

function Card({ post }) {
  if (Object.keys(post) < 1) {
    return;
  }
  const userName = `@${post.user.userName}`;
  const mediaIds = post.media.length > 0 ? post.media.map((media) => media.id) : [];
  const [imagesLoaded, setImagesLoaded] = useState(new Set(mediaIds));

  const handleImageLoad = (mediaId) => {
    if (imagesLoaded.size < 1) 
      return;

    setImagesLoaded(prev => {
      const newSet = new Set(prev);
      newSet.delete(mediaId);
      return newSet;
    })
  }
  console.log('helooooo from card component');

  return (
    <div className="max-w-screen-md mx-auto bg-transparent rounded-2xl shadow-md p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-white-800">{post.title}</h2>

      <div className="grid grid-cols-1 gap-4">
        {post.media
          ? post.media.map((media) => {
              return (
                <div className="overflow-hidden" key={Math.random().toString()}>
                  <img
                    src={media.href}
                    alt="cat"
                    className="object-cover w-full h-100"
                    onLoad={() => handleImageLoad(media.id)}
                    onError={() => handleImageLoad(media.id)}
                  />
                  {imagesLoaded.has(media.id) ? 
                    <ImageSceletonLoader />
                    : '' 
                  }
                </div>
              );
            })
          : "No media uploaded"}
      </div>

      <div className="flex items-center justify-between text-sm pt-2 border-t">
        <span className="font-medium text-gray-400">
          Posted by: <span className="text-white font-bold">{userName}</span>
        </span>

        <a href="/posts/post-slug" className="text-white-400 hover:underline">
          View Post →
        </a>
      </div>
    </div>
  );
}

export default Card;
