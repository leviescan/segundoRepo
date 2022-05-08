import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimerServicioService } from '../primer-servicio.service';
import { ServicioDatosService } from '../servicio-datos.service';
import { Empleado } from '../usuario.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:PrimerServicioService, private miServicioDatos:ServicioDatosService) { }

  ngOnInit(): void {

    this.empleados=this.miServicioDatos.empleadoDatos;

   
  }

  backHome(){

    this.router.navigate(['']);

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

     this.router.navigate(['']);
     
     
  }


}
