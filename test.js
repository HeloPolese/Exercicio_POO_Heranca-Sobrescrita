import {Pessoa} from "./Pessoa.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Poupanca} from "./Poupanca.js";

// let func = new Funcionario("12345", "Rivaldo", "123.456.789-12", "01/01/2001", 1200.00);



let cli1 = new Cliente("Roberto Carlos", "987.654.321-00", "02/02/2002");
let cli2 = new Cliente("Zico", "654.321.987-11", "03/03/2003", 500, -500.0, "VIP");
let cli3 = new Cliente("Heloisa", "653.271.087-81", "07/07/2005", 900, 100, "PCD");

let  cliente = [cli1,cli2,cli3];

//cliente com conta corrente e poupança 
let corrente1 = new ContaCorrente(cliente[2], 300, 0);
let contaPoupanca1 = new Poupanca(cliente[0], 200);

console.log(corrente1);
console.log(contaPoupanca1);
console.log(contaPoupanca1.viraMes(2)); 


/*
console.log("\nNomes das Pessoas:\n");
vetPessoas.forEach( (objPessoa) => {
    console.log(objPessoa.toString());
 
})
*/;

