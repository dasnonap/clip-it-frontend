import Card from "./_comp/Card";
import Sidebar from "./_comp/Sidebar";
import { observer } from "mobx-react";
import { postsStore } from "../../stores/rootStore";

function Listing() {
  
  return (
    <div className="pt-4">
      <h2>listing bish</h2>

      <div className="flex align-items-start gap-10">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
        {postsStore.isLoading ?
            <div className="flex flex-center justify-center">
              <img src="/loader.svg" alt=""/>
            </div>
          : 
            postsStore.posts ? (
              <>
                {postsStore.posts.map((post) => {
                  return <Card post={post} key={Math.random().toString()} />;
                })}
              </>
            ) : (
              "No posts found!"
            )
          }
        </div>
      </div>
    </div>
  );
}

export default observer(Listing);
