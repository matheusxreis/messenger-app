class MessageEntity {
  readonly id: string;
  readonly userId: string;
  readonly message: string;
  readonly timestamp: string;

  constructor(userId: string, message: string) {
    this.id = Math.random().toString();
    this.timestamp = Date.now().toString();
    this.userId = userId;
    this.message = message;
  }
}