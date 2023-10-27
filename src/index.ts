// IMPORTS
import { BankAccount } from "./model/bankAccount";
import { Usuario } from "./model/usuario";

// VARIÁVEIS
const usuario1 = new Usuario("Cris", "email@com");
const bankAccount1 = new BankAccount(1, "Cris", "01");

// TESTES
// console.log(usuario1.nomeUsuario + "-" + usuario1.emailUsuario);
// bankAccount1.deposito(1000)
// console.log(bankAccount1);