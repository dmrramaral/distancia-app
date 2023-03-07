import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  valor!: number;
  distancia!: number;
  tipoTransporte: number = 0;
  dependente: number = 0;
  possuiDependente: boolean = false;
  showValor: boolean = false;

  totalPessoas: number = 1;


  valorPassagem(): void{

    if (this.tipoTransporte == 1) {
      this.valor = this.distancia * 0.35;
           
      
    }else if (this.tipoTransporte == 2){
      this.valor = this.distancia * 0.48;
      
    }
     
  }

  quantidadeDependente() {
    if (this.possuiDependente == false) {
      this.dependente = 0
    }
    return this.dependente;
    
  }




  calcularValor(): void {
    this.valorPassagem(); 
    this.quantidadeDependente();  
    const quantidade = this.dependente;
   
    if(quantidade == 0){
      this.valor * this.totalPessoas;
    }else if(quantidade > 0){
    
      this.totalPessoas = (quantidade + 1);
     
     this.valor = this.totalPessoas * this.valor;
    }
    this.showValor = true;
    console.log(this.valor, this.totalPessoas)
    
  }


 


}
