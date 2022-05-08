import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from '../servicio-datos.service';
import { PrimerServicioService } from '../primer-servicio.service';
import { Empleado } from '../usuario.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'TALLER DIRECTIVAS';

  constructor(private miServicio:PrimerServicioService, private miServicioDatos:ServicioDatosService){

   
  }


  ngOnInit(): void {

   // this.empleados=this.miServicioDatos.empleadoDatos;

    this.miServicioDatos.readUser().subscribe(dataUsers=>{

      console.log(dataUsers);
      this.empleados=Object.values(dataUsers);

      this.miServicioDatos.setUser(this.empleados);

    });
  }

  
  empleados:Empleado[]=[];
 

  cuadroNombre:string='';
  cuadroApellido:string='';
  cuadroProfe:string='';
  cuadroSalario!:number;

  
  

  agregarEmpleado(){

     let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroProfe, this.cuadroSalario);

    // this.miServicio.muestraMensaje("El nombre del empleado es " + miEmpleado.nombre); era para el primer servicio

     this.miServicioDatos.addUserService(miEmpleado);
     
     
  }

}
