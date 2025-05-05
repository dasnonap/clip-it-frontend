import { useEffect, useState } from "react";
import Card from "./_comp/Card";
import Sidebar from "./_comp/Sidebar";
import Client from "../../api/Client";
import Post from "../../api/Post";

function Listing() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Client.get("posts.list")
      .then((response) => {
        if (response.data.items && response.status == 200) {
          let rawPosts = [];

          response.data.items.forEach((postData) => {
            const post = new Post();

            rawPosts.push(post.createFromArray(postData));
          });

          setPosts(rawPosts);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="pt-4">
      <h2>listing bish</h2>

      <div className="flex align-items-start gap-10">
        <div className="w-1/4">
          <Sidebar />
        </div>

        {posts ? (
          <div className="w-3/4">
            {posts.map((post) => {
              return <Card post={post} key={Math.random().toString()} />;
            })}
          </div>
        ) : (
          "No posts found!"
        )}
      </div>
    </div>
  );
}

export default Listing;
