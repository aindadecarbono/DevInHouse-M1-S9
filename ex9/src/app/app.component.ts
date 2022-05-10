import { Component, OnInit } from '@angular/core';
import { Aluno,Nota } from 'src/assets/exercicio10';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Aluno implements Nota, OnInit{
  title = 'ex10';
  cadeira: string = "";
  ponto: number = 0;
  aluno: Aluno = new Aluno("A",123);
  media: number = 0;
  passou: boolean = false;

	constructor(){
    super("", 0);
  }

	calculaMedia(notas:any){

		let arrayMedia:number[] = [];
					let media:number = 0;
	        for(let i=0; i<notas.length;i++){
						arrayMedia.push (notas[i].ponto)
						
          }
          
					let initialValue = 0;
					let somatorio = arrayMedia.reduce(
						 (previousValue, currentValue) => previousValue + currentValue,initialValue);
						
         this.media = somatorio / notas.length
				 this.passou = this.aprovado(media);
	}
   
  ngOnInit(): void {
    let aluno1: Aluno = new Aluno("Jonas", 7);
	        let notas: Nota[] = [
	            {
	                cadeira: "Geografia",
	                ponto: 4,
	                aluno: aluno1
	            },
	            {
	                cadeira: "Geografia",
	                ponto: 8,
	                aluno: aluno1
	            },
	            {
	                cadeira: "Geografia",
	                ponto: 3,
	                aluno: aluno1
	            },
	            {
	                cadeira: "Geografia",
	                ponto: 10,
	                aluno: aluno1
	            }
	        ]

					this.calculaMedia(notas)
          
					
  }
  
  
}
