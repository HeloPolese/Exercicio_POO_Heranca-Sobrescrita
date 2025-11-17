import { Conta } from "./Conta.js";

export class Poupanca extends Conta {
    #rendimento;
   
    constructor(cliente, saldo = 0.0, rendimento = 0.0) {
        super (cliente, saldo);
        this.rendimento = rendimento;
    }

    get rendimento() {
        return this.#rendimento;
    }
    set rendimento(valor) {
        if (valor < 0.0) {
            this.#rendimento = 0.0;
        } else {
            this.#rendimento = valor;
        }
    }

    viraMes(){
                 let valorRendimento = super.saldo * (this.#rendimento/100);
                 super.depositar(valorRendimento);
        } 
    
    toString() {
        return (super.toString() +
            "\nSaldo = R$" + super.saldo.toFixed(2) +
            "\nRendimento = " + this.#rendimento.toFixed(2) + "%");
    }
}

