import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/assets/exercicio09';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, Produto{
  title = 'ex9';
  
  nome: string;
  valor: number;
  codigo: number;
  quantidade: number;
  emEstoque: boolean;
  valorTotal: number;

  sofa:Produto = {
    nome: 'Sofá amarelo',
    valor: 150,
    codigo: 12345,
    quantidade: 30,
    emEstoque: true
  }

  // constructor(nome:string, valor: number, codigo: number, quantidade: number, emEstoque: boolean, valorTotal: number){
  //   this.nome = nome;
  //   this.valor = valor;
  //   this.codigo = codigo;
  //   this.quantidade = quantidade;
  //   this.emEstoque = emEstoque;
  //   this.valorTotal = valorTotal;
  // }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.comprar(this.sofa,30)
    this.comprar(this.sofa,10)
  }
  
  comprar(produto: Produto, quantidade: number) {
    if(produto.emEstoque){
      this.valorTotal = produto.valor*quantidade
      produto.quantidade -= quantidade
    }
  }
  
  
}
