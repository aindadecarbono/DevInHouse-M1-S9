class Conta{

  protected numero: number;
  protected saldo: number;
  protected estaAtiva: boolean;
  protected dono: string;

  constructor(numero: number, saldo: number, estaAtiva: boolean, dono:string){
    this.numero = numero;
    this.saldo = saldo;
    this.estaAtiva = estaAtiva;
    this.dono = dono;
  }
}

class ContaEmpresa extends Conta{
  private limiteDeDeposito: number = 1000;
  
constructor(numero:number, saldo: number, estaAtiva: boolean, dono: string){
    super(numero,saldo,estaAtiva,dono)
    this.numero = numero;
    this.saldo = saldo;
    this.estaAtiva = estaAtiva;
    this.dono = dono;


  }

  deposito(valor: number){
    if(valor<=this.limiteDeDeposito){this.saldo += valor}
    else {console.log("Depósito inválido")}
  }

  imprimeValorConta(){console.log(this.saldo)}
}

const novaConta = new ContaEmpresa(12345,0,true,"Bruno");
console.log(novaConta)

novaConta.deposito(1000)
novaConta.imprimeValorConta()
novaConta.deposito(1000)
novaConta.imprimeValorConta()
novaConta.deposito(1000)
novaConta.imprimeValorConta()
novaConta.deposito(500)
novaConta.imprimeValorConta()