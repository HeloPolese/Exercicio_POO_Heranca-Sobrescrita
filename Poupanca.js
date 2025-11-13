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

    viraMes(taxaRendimento){ //porcentagem do rendimento do saldo, DEVER SER PARAMETRO???
        if (taxaRendimento >= 0 && taxaRendimento != null) {
                 let rendimento = super.saldo * (taxaRendimento/100);
                 this.#rendimento += rendimento;
                 super.depositar(rendimento);
        } 
    }
    
    toString() {
        return (super.toString() +
            "\nSaldo = R$" + super.saldo.toFixed(2) +
            "\nRendimento = R$" + this.#rendimento.toFixed(2) );
    }
}

