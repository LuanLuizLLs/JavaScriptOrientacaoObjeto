import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;

    #cliente;
    #saldo = 0;

    static quantidadeContas = 0;

    constructor({ agencia, cliente }) {
        this.agencia = agencia;
        this.#cliente = cliente;
        ContaCorrente.quantidadeContas += 1;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this.#cliente = novoCliente;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return valor;
        }
        return false;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
        return false;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}