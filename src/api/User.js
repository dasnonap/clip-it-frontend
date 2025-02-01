import client from "./Client.js";
import { parseErrorResponse } from "../helpers/utils";
import commonStore from "../stores/commonStore.js";

class User {
  USER_ENDPOINT = "/user";
  LOGIN_ENDPOINT = this.USER_ENDPOINT + "/login";
  REGISTER_ENDPOINT = this.USER_ENDPOINT + "/register";

  /**
   * Send Login Request
   */
  async login(data) {
    await client
      .post(this.LOGIN_ENDPOINT, data)
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);
        if (responseData.result == false) {
          return;
        }
        console.log(responseData.token);
        if (responseData.token.length > 0) {
          commonStore.setToken(responseData.token);
        }
      })
      .catch((error) => {
        throw new Error(parseErrorResponse(error));
      });
  }

  async register(data) {
    console.log(data);
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
