class Filme{
  nome: string;
  anoDeLancamento: number;
  diretor: string;
}

const objFilme = new Filme();

objFilme.nome = 'The Matrix'
objFilme.anoDeLancamento = 1999
objFilme.diretor = 'Lana Wachowski & Lilly Wachowski'

console.log(objFilme)