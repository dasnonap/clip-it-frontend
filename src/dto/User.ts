class User {
  id: string;
  userName: string;
  email: string;
  roles: any;

  constructor(userArray: any) {
    this.id = userArray.id ?? "";
    this.userName = userArray.username ?? "";
    this.roles = userArray.roles ?? [];
    this.email = userArray.email;
  }
}

export default User;
