class UserEntity {
  readonly id: string;
  readonly username: string;
  readonly email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
    this.id = Math.random().toString();
  }
}