abstract class MessageError extends Error {
  readonly message: string;
  readonly error?: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

class InvalidMessage extends MessageError {
  constructor() {
    super("Mensagem inválida, tente novamente.");
  }
}

class ErrorSendingMessage extends MessageError {
  constructor() {
    super("Ocorreu um erro durante o envio da(s) mensagem(ns), tente novamente.");
  }
}

class ErrorRetrievingMessage extends MessageError {
  constructor() {
    super("Ocorreu um erro durante o recebimento da(s) mensagem(ns).");
  }
}