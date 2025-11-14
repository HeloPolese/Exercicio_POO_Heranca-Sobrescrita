
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Poupanca} from "./Poupanca.js";


let cli1 = new Cliente("Roberto Carlos", "987.654.321-00", "02/02/2002");
let cli2 = new Cliente("Zico", "654.321.987-11", "03/03/2003", 500, -500.0, "VIP");
let cli3 = new Cliente("Heloisa", "653.271.087-81", "07/07/2005", 900, 100, "PCD");

let  vetCliente = [cli1,cli2,cli3];

//cliente com conta corrente e poupança 
let corrente1 = new ContaCorrente(vetCliente[2], 300, 0);
let contaPoupanca1 = new Poupanca(vetCliente[0], 200);
let contaPoupanca2 = new Poupanca(vetCliente[1], 40);
var vetContas = [corrente1,contaPoupanca1,contaPoupanca2];

console.log(corrente1);
console.log(contaPoupanca1);
console.log(contaPoupanca1.viraMes(2)); 


function procurarCliente(nome) {
    let cliente = vetCliente.find(objCliente => objCliente.nome == nome); // acessa o atributo nome da classe CLiente
    if (cliente != undefined) {
        console.log("Clinte encontrado\n" + cliente.toString());
    } else{
        console.log("Cliente não encontrado!");
    }
}

console.log(procurarCliente("Zico"));


console.log("ToString() das Contas Corrente e Poupança: \n"); // casa classe executa a sua versão do Metodo toString()
vetContas.forEach((objConta) => {
    console.log(objConta.toString());
    console.log("-----------------------");
});


;

