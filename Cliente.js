import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {
    #pontuacaoFidelidade;
    #limiteCredito;
    #categoria; 

    constructor(nome, cpf, dtNasc, pontuacaoFidelidade = 0, limiteCredito = 100.0, categoria = "COMUM") {
        super(nome, cpf, dtNasc);//acessa o constructor de pessoa passando os parametros
        this.pontucaoFidelidade = pontuacaoFidelidade;
        this.limiteCredito = limiteCredito;
        this.categoria = categoria.toUpperCase();
    }

    get pontuacaoFidelidade() {
        return this.#pontuacaoFidelidade;
    }
    set pontuacaoFidelidade(novaPontuacao) {
        if (novaPontuacao >= 0) {
            this.#pontuacaoFidelidade = novaPontuacao;
        } else if (this.#pontuacaoFidelidade == undefined) {
            this.#pontuacaoFidelidade = 0;
        }
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(novoLimite) {
        if (novoLimite >= 0) {
            this.#limiteCredito = novoLimite;
        } else if (this.#limiteCredito == undefined) {
            this.#limiteCredito = 100;
        }
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(novaCategoria) { //como são so tres optei por nao criar um let que guardasse novaCategoria.toUpperCase()
        if (novaCategoria.toUpperCase() == "COMUM" ||
            novaCategoria.toUpperCase() == "VIP" ||
            novaCategoria.toUpperCase() == "PCD") {
            this.#categoria = novaCategoria;
        } else if (this.#categoria == undefined) {
            this.#categoria = "COMUM";
        }
    }

    toString() {
        return (super.toString() +
            "\nPontuação Fidelidade: " + this.#pontuacaoFidelidade +
            "\nLimite de Crédito: " + this.#limiteCredito.toFixed(2) +
            "\nCategoria do Cliente: " + this.#categoria);
    }
}