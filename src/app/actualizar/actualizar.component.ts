import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimerServicioService } from '../primer-servicio.service';
import { ServicioDatosService } from '../servicio-datos.service';
import { Empleado } from '../usuario.model';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:PrimerServicioService, private miServicioDatos:ServicioDatosService) { }

  ngOnInit(): void {

    this.acciones=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.miServicioDatos.empleadoDatos;

    this.indice=this.route.snapshot.params['id'];//llamo al usuario por id

    let empleadoNuevo:Empleado=this.miServicioDatos.encontrarUsuario(this.indice);//traigo los datos que quiero actualizar

    this.cuadroNombre=empleadoNuevo.nombre;
    this.cuadroApellido=empleadoNuevo.apellido;
    this.cuadroProfe=empleadoNuevo.cargo;
    this.cuadroSalario=empleadoNuevo.salario;
  }

  backHome(){

    this.router.navigate(['']);

  }

  empleados:Empleado[]=[];
 

  cuadroNombre:string='';
  cuadroApellido:string='';
  cuadroProfe:string='';
  cuadroSalario:number=0;
  indice!: number;
  acciones!:number;

  
  
/*  
  actualizarEmpleado(){

     let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroProfe, this.cuadroSalario);

    // this.miServicio.muestraMensaje("El nombre del empleado es " + miEmpleado.nombre); era para el primer servicio

     this.miServicioDatos.upgradeUserService(this.indice,miEmpleado);

     this.router.navigate(['']);
     
     
  }

  eliminarUsuario(){


    this.miServicioDatos.deleteUserService(this.indice);

    this.router.navigate(['']);

  }
*/

aditarEmpleado(){

if(this.acciones==0){

  let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroProfe, this.cuadroSalario);

 this.miServicio.muestraMensaje("you sure, you want to update to " + miEmpleado.nombre); //era para el primer servicio

  this.miServicioDatos.upgradeUserService(this.indice,miEmpleado);
  this.router.navigate(['']);

} else{
  

  let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroProfe, this.cuadroSalario);

  this.miServicio.muestraMensaje("you sure, you want to delate " + miEmpleado.nombre); //era para el primer servicio
  this.miServicioDatos.deleteUserService(this.indice);

  this.router.navigate(['']);
}
}
}