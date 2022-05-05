abstract class ContactError extends Error {
  readonly message: string;
  readonly error?: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

class InvalidContact extends ContactError {
  constructor() {
    super("Contato inválido.");
  }
}

class ErrorRetrievingContact extends ContactError {
  constructor() {
    super("Não foi possível recuperar o(s) contato(s), tente novamente.")
  }
}