import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {

  constructor() { }

  muestraMensaje(mensaje:string){


    confirm(mensaje);
  }
}
