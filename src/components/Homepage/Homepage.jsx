import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

function Homepage() {
  const isUserAuth = authStore.isAuthenticated;
  
  return (
    <div className="test">
      aaaa this is home listing content
      <br />
      
      {isUserAuth ? 'logged in guy ': 'not logged in'}
      
      <br />
      
      <button onClick={(event) => {
        authStore.logout();
        console.log(authStore);
      }}>Log Out</button>
    </div>
  );
}

export default observer(Homepage);
