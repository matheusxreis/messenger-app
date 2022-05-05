abstract class UserError extends Error {
  readonly message: string;
  readonly error: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

class InvalidUserEmail extends UserError {
  constructor() {
    super("E-mail inválido, tente novamente.");
  }
}

class InvalidUserName extends UserError {
  constructor() {
    super("Nome de usuário inválido, tente novamente");
  }
}

class ConnectionError extends UserError {
  constructor() {
    super("Ocorreu um erro de conexão com o servidor, tente novamente.");
  }
}

class DuplicateEmail extends UserError {
  constructor() {
    super("O e-mail em questão já está sendo utilizado, informe outro e tente novamente.");
  }
}