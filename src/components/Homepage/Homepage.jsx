import { observer } from "mobx-react";
import { authStore, userStore } from "../../stores/rootStore";

function Homepage() {
  const isUserAuth = authStore.isAuthenticated;
  const currentUser = userStore.getUser;

  return (
    <div className="test">
      aaaa this is home listing content
      <br />
      {isUserAuth ? `Welcome ${currentUser.userName}` : "not logged in"}
      <br />
      <button
        onClick={(event) => {
          authStore.logout();
          console.log(authStore);
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default observer(Homepage);
