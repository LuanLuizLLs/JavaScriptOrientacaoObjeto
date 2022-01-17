import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente({
    nome: 'Ricardo Silva', 
    cpf: 23245366787
});

const cliente2 = new Cliente({
    nome: 'Aline Oliveira', 
    cpf: 45466788932
});

const conta1 = new ContaCorrente({
    agencia: 1001,
    cliente: cliente1
});

const conta2 = new ContaCorrente({
    agencia: 1002,
    cliente: cliente2
});