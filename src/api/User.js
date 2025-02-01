import client from "./Client.js";
import { parseErrorResponse } from "../helpers/utils";
import commonStore from "../stores/commonStore.js";

class User {
  /**
   * Send Login Request
   */
  login(data) {
    return client
      .post(this.LOGIN_ENDPOINT, data)
      .then((response) => {
        const responseData = response.data;
        if (responseData.result == false) {
          return;
        }

        if (responseData.token.length > 0) {
          commonStore.setToken(responseData.token);
        }
      })
      .catch((error) => {
        throw new Error(parseErrorResponse(error));
      });
  }

  async register(data) {
    await client
      .post(this.REGISTER_ENDPOINT, data)
      .then((response) => {
        console.log("registered", response);
      })
      .catch((error) => {
        throw new Error(parseErrorResponse(error));
      });
  }
}

export default new User();
