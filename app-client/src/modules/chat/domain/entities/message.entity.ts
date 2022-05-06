class MessageEntity {
  readonly id: string;
  readonly userId: string;
  readonly message: string;
  readonly timestamp: string;

  constructor(id: string, timestamp: string, userId: string, message: string) {
    this.id = id;
    this.timestamp = timestamp;
    this.userId = userId;
    this.message = message;
  }
}