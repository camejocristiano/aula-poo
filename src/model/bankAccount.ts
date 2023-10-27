export class BankAccount {
  // ATRIBUTOS
  private _id: Number;
  private _nome: String;
  private _senha: String;
  private _saldo: Number;

  // CONSTRUTORES
  constructor(id: Number, nome: String, senha: String) {
    this._id = id;
    this._nome = nome;
    this._senha = senha;
    this._saldo = 0;
  }

  // GETTERS and SETTERS
  get idUsuario(): Number {
    return this._id;
  }
  set idUsuario(id: Number) {
    this._id = id;
  }
  get nomeUsuario(): String {
    return this._nome;
  }
  set nomeUsuario(nome: String) {
    this._nome = nome;
  }
  get senhaUsuario(): String {
    return this._senha;
  }
  set senhaUsuario(senha: String) {
    this._senha = senha;
  }
  get saldoUsuario(): Number {
    return this._saldo;
  }
  set saldoUsuario(saldo: Number) {
    this._saldo = saldo;
  }

  // FUNÇÕES DE REGRAS DE NEGÓCIOS
  sacar(valor: Number) {
    if (valor <= this._saldo) {
      return this._saldo;
    } else {
      return "Saldo insuficiente!";
    }
  }
  deposito(valor: Number) {
    return (this._saldo =+ valor);
  }

  // TO STRING
  public retornarObjeto() {
    return 
    this._id + " - " + this._nome;
    this._senha + " - " + this._saldo;
  }
}
