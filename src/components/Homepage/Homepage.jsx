import { observer } from "mobx-react";
import { authStore, userStore } from "../../stores/rootStore";
import Client from "../../api/Client";
import Listing from "../Posts/Listing";

function Homepage() {
  const isUserAuth = authStore.isAuthenticated();
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
      <br />
      <button
        onClick={(event) => {
          Client.post(
            "user.refresh",
            {},
            {
              withCredentials: true,
            }
          )
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              console.log("exittt");
            });
        }}
      >
        Refresh Token
      </button>
      <Listing />
    </div>
  );
}

export default observer(Homepage);
