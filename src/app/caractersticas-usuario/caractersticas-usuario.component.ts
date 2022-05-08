import { PrimerServicioService } from './../primer-servicio.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caractersticas-usuario',
  templateUrl: './caractersticas-usuario.component.html',
  styleUrls: ['./caractersticas-usuario.component.css']
})
export class CaractersticasUsuarioComponent implements OnInit {

  @Output() newCaracteristica = new EventEmitter<string>();

  addCaracteristica(value: string) {
   this.miServicio2.muestraMensaje(value); 
    this.newCaracteristica.emit(value);
  }

 constructor(private miServicio2:PrimerServicioService) { }// era del primer servicio

  ngOnInit(): void {
  }

}
