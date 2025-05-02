function Card() {
  return (
    <div className="max-w-screen-md mx-auto bg-transparent rounded-2xl shadow-md p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-white-800">Post Title Here</h2>

      <div className="grid grid-cols-1 gap-4">
        <div className="overflow-hidden">
          <img
            src="https://placecats.com/300/200"
            alt="cat"
            className="object-cover w-full h-100"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://placecats.com/300/200"
            alt="cat 2"
            className="object-contain w-full h-100 overflow-hidden"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm pt-2 border-t">
        <span className="font-medium text-gray-400">
          Posted by: <span className="text-white font-bold">@username</span>
        </span>

        <a href="/posts/post-slug" className="text-white-400 hover:underline">
          View Post →
        </a>
      </div>
    </div>
  );
}

export default Card;
