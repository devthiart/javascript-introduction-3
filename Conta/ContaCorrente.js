import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContasCorrentes = 0;

    constructor(agencia, cliente){
        super(0, agencia, cliente);
        ContaCorrente.numeroDeContasCorrentes++;
    }

    sacar(valor) {
        const taxa = 1.1;
        
        return super._sacar(valor, taxa);
    }
}