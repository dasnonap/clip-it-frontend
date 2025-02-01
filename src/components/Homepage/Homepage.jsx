import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

function Homepage() {
  const isUserAuth = authStore.isAuthenticated;
  
  return <div className="test">
    aaaa this is home listing content

    {isUserAuth ? 'logged in guy': 'not logged in'}
  </div>;
}

export default observer(Homepage);
