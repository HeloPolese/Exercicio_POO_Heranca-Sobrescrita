import {Pessoa} from "./Pessoa.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Poupanca} from "./Poupanca.js";


let cli1 = new Cliente("Roberto Carlos", "987.654.321-00", "02/02/2002", 200, 150, "COMUM");
let cli2 = new Cliente("Zico", "654.321.987-11", "03/03/1953", 500, 200.0, "VIP");
let cli3 = new Cliente("Heloisa", "653.271.087-81", "07/07/2005", 900, 100, "PCD");

let clientes = [cli1,cli2,cli3];


//cliente com conta corrente e poupança 
let corrente1 = new ContaCorrente(cli1, 1000.0, 10.0, 300, 5.0);
let corrente2 = new ContaCorrente(cli2, 500.0, 5.0, 500.0, 3.0);
let contaPoupanca1 = new Poupanca(cli3, 200, 0.0);

let contas = [corrente1, corrente2, contaPoupanca1];


// Exibe os clientes do banco
console.log("=== Clientes do Banco ===");
for (let i = 0; i < clientes.length; i++) {
  console.log(clientes[i].toString());
}
console.log("-----------------------");

// Exibe as contas do banco
console.log("=== Contas do Banco ===");
for (let i = 0; i < contas.length; i++) {
  console.log(contas[i].toString());
  console.log("-----------------------");
}

// Mostra a situação das contas antes do método viraMes ser executado
console.log("=== Situação inicial ===");
for (let i = 0; i < contas.length; i++) {
  console.log(contas[i].toString());
  console.log("-----------------------");
}

// Executa o método viraMes() para cada conta
console.log("=== Executando viraMes ===");
for (let i = 0; i < contas.length; i++) {
  contas[i].viraMes(1.0); 
}

// Mostrar estado após a operação
console.log("=== Situação após viraMes ===");
for (let i = 0; i < contas.length; i++) {
  console.log(contas[i].toString());
  console.log("-----------------------");
}



