import { Cliente } from "../Cliente.js";

export class Conta {
    
    constructor(saldo, cliente, agencia) {
        console.log(this.constructor);

        if(this.constructor == Conta) {
            throw new Error("You can't instantiate objects of type Conta, because it is an abstract class!");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;
    }

    set cliente(clienteRecebido) {
        if(clienteRecebido instanceof Cliente) {
            this._cliente = clienteRecebido;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    //Método "abstrato".
    sacar(valor) {
        throw new Error("Sacar is an abstract method!");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if(valor <= 0) return;
            
        this._saldo += valor;
        
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }
}