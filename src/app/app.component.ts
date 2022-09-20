import { Component } from '@angular/core';
import { Empleado } from './empleados.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[]=[
    new Empleado("carlos","botero","presidente",12000),
    new Empleado("pepito","perez","asistente",10000),
    new Empleado("gabriel","monterrey","profesor",8000),
    new Empleado("maria","casas","profesora",7000),
  ];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
