export class Usuario {
  // ATRIBUTOS
  private nome: String;
  private email: String;

  // CONSTRUTORES
  constructor(nome: String, email: String) {
    this.nome = nome;
    this.email = email;
  }

  // GETTERS and SETTERS
  get nomeUsuario(): String {
    return this.nome;
  }
  set nomeUsuario(nome: String) {
    this.nome = nome;
  }
  get emailUsuario(): String {
    return this.email;
  }
  set emailUsuario(email: String) {
    this.email = email;
  }

  // TO STRING
  public retornarObjeto() {
    return this.nome + " - " + this.email;
  }
}