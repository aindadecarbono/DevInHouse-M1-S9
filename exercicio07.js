// O exercício consiste em implementar o método requerido pela interface **Pessoa** às classes **Aluno** e **Funcionario**. O método deverá imprimir em um console.log todas as informações sobre o aluno e funcionário cadastrado.
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, rua, matricula, cadeiras) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.matricula = matricula;
        this.cadeiras = cadeiras;
    }
    Aluno.prototype.cadastrar = function () {
        console.log("Nome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nRua: ").concat(this.rua, "\nMatr\u00EDcula: ").concat(this.matricula, "\nCadeiras: ").concat(this.cadeiras));
    };
    return Aluno;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, rua, identificador, setor) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.identificador = identificador;
        this.setor = setor;
    }
    Funcionario.prototype.cadastrar = function () {
        console.log("Nome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nRua: ").concat(this.rua, "\nIdentificador: ").concat(this.identificador, "\nSetor: ").concat(this.setor));
    };
    return Funcionario;
}());
var novoAluno = new Aluno("Bruno", 31, "Av. Abc", 12345, ['Angular', 'Typescript', 'Javascript']);
novoAluno.cadastrar();
var novoFuncionario = new Funcionario('João', 25, "Rua Xyz", 123456, 'Administração');
novoFuncionario.cadastrar();
