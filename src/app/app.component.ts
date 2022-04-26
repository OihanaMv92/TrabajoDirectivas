import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registros de Usuarios';
  mensaje="";
  registro=false;
nombre:string="";
apellido:string="";
entradas:any[];


// Esti simula una bd.
constructor() {
  this.entradas=[
    {titulo:"Pyton cada día mas presente."},
    {titulo:"Java presente desde hace mas de 20 años."},
    {titulo:"JavaScript cada vez mas funcional.."},
    {titulo:"Kotlin potencia para tus apps."},
    {titulo:"¿Donde quedó pascal?."},
  ];
}


  registrarUsuario(){
    this.registro=true;
    this.mensaje="Usuario registrado con exito";
  }
}
