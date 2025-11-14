import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(cliente, saldo = 0, tarifa = 0, limiteCredito = 100, juros = 0) {
        super(cliente, saldo);
        this.tarifa = tarifa;
        this.limiteCredito = limiteCredito;
        this.juros = juros;
        this.#saldoDevedor = 0;
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(valor) {
        if (valor < 0) {
            this.#limiteCredito = 0;
        } else {
            this.#limiteCredito = valor;
        }
    }

    get tarifa() {
        return this.#tarifa;
    }
    set tarifa(valor) {
        if (valor < 0) {
            this.#tarifa = 0;
        } else {
            this.#tarifa = valor;
        }
    }

    get juros() {
        return this.#juros;
    }
    set juros(valor) {
        if (valor < 0) {
            this.#juros = 0;
        } else {
            this.#juros = valor;
        }
    }

    saldo() {
        return (super.saldo - this.#saldoDevedor);
    }

    limiteDisponivel() {
        return (this.#limiteCredito + super.saldo - this.#saldoDevedor);
    }

    sacar(valor) {
        if (valor <= (super.saldo + this.#limiteCredito - this.#saldoDevedor)) { // ve se o valor nao vai ultrapassar saldo e limite
            if (super.sacar(valor) == false) { //significa que o valor nao foi suficiente pois foi maior que o saldo
                valor -= super.saldo; //descobre quanto falta pra poder sacar
                super.sacar(super.saldo);
                this.#saldoDevedor += valor; // saldo devedor recebe o valor da divida 
                // pois o valor do saque extrapolou o saldo usando o limiteCredito
            }
            return true;
        }
        return false;
    }

    depositar(valor) {
        if (valor > 0) {
            if (this.#saldoDevedor > 0) { //ve se a conta esta devendo
                if (valor > this.#saldoDevedor) { //se estiver ve se o valor é maior que saldo devedor
                    valor -= this.#saldoDevedor; // se o valor do deposito for maior que o que se deve ele subtrai parte do deposito
                    this.#saldoDevedor = 0; // aqui zera o saldo pois a linha acima nao zera, so´subtrai o valor
                    super.depositar(valor);
                } else {
                    this.#saldoDevedor -= valor; // se o valor de saldo é maior que o valor
                }
            } else { // se o saldo devedor estiver zerado ele deposita direto
                super.depositar(valor);
            }
            return true;
        }
        return false;
    }

      viraMes() {
    if (this.tarifa > 0) {
        // tenta descontar a tarifa
        if (!this.sacar(this.tarifa)) {
            // se não tiver saldo suficiente, vira saldo devedor
            this.#saldoDevedor += this.tarifa;
        }
    }
    // aplica juros sobre saldo devedor, se houver
    if (this.#saldoDevedor > 0) {
        this.#saldoDevedor += this.#saldoDevedor * (this.#juros / 100);
    }
}

    toString() {
        return (super.toString() +
            "\nSaldo = R$" + (this.saldo()).toFixed(2) + //acessa o get saldo da classe Pessoa
            "\nTarifa = R$" + this.#tarifa.toFixed(2) +
            "\nLimite de Crédito = R$" + this.#limiteCredito.toFixed(2) +
            "\nJuros = " + this.#juros.toFixed(2) + "%");
    }
}


