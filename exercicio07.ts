// O exercício consiste em implementar o método requerido pela interface **Pessoa** às classes **Aluno** e **Funcionario**. O método deverá imprimir em um console.log todas as informações sobre o aluno e funcionário cadastrado.

interface Pessoa{
  nome: string;
  idade: number;
  rua: string;

  cadastrar();
}

class Aluno implements Pessoa{
  nome: string;
  idade: number;
  rua: string;
  matricula: number;
  cadeiras: string[];

  constructor(nome: string, idade: number, rua: string, matricula: number, cadeiras: string[]){

    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.matricula = matricula;
    this.cadeiras = cadeiras

  }

  cadastrar() {
    console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nRua: ${this.rua}\nMatrícula: ${this.matricula}\nCadeiras: ${this.cadeiras}`)
  }
}
class Funcionario implements Pessoa{
  nome: string;
  idade: number;
  rua: string;
  identificador: number;
  setor: string;

  constructor(nome: string, idade: number, rua: string, identificador: number, setor: string){

    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.identificador = identificador;
    this.setor = setor
    
  }

  cadastrar() {
    console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nRua: ${this.rua}\nIdentificador: ${this.identificador}\nSetor: ${this.setor}`)
  }
}

const novoAluno = new Aluno("Bruno",31,"Av. Abc",12345,['Angular','Typescript','Javascript']);
novoAluno.cadastrar();

const novoFuncionario = new Funcionario('João',25,"Rua Xyz",123456,'Administração')
novoFuncionario.cadastrar();