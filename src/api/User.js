class User {
  id = "";
  userName = "";
  email = "";
  roles = [];

  constructor() {}

  createFromArray(userArray) {
    if (Object.keys(userArray).length < 0) {
      return;
    }

    this.id = userArray.id;
    this.userName = userArray.username;
    this.roles = userArray.roles;
    this.email = userArray.email;
  }
}

export default User;
