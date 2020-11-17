import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const ContaCorrenteAlice = new ContaPoupanca(500, cliente2, 1001);

const contaSalario = new ContaSalario(cliente2);

ContaCorrenteRicardo.depositar(500);

ContaCorrenteAlice.depositar(200);

let valorATransferir = 250;

ContaCorrenteRicardo.transferir(valorATransferir, ContaCorrenteAlice);

contaSalario.depositar(200);
contaSalario.sacar(20);

console.log(ContaCorrenteRicardo);
console.log(ContaCorrenteAlice);
console.log("Número de contas: ", ContaCorrente.numeroDeContasCorrentes);
console.log(contaSalario);