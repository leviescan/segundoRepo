import { Empleado } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private HttpClientsa:HttpClient) { }

  getUser(){

    return this.HttpClientsa.get('https://primer-c2970-default-rtdb.firebaseio.com/datos.json');
  }

  saveUser(userSaved:Empleado[]){

    this.HttpClientsa.put('https://primer-c2970-default-rtdb.firebaseio.com/datos.json', userSaved).subscribe(

    response=>console.log('se han guardado empleados:' + response),
    error=>console.log('error:' + error),
    );
  }
}
