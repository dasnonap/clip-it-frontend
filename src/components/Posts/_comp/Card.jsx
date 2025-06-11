function Card({ post }) {
  if (Object.keys(post) < 1) {
    return;
  }
  const userName = `@${post.user.userName}`;
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
                  />
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
