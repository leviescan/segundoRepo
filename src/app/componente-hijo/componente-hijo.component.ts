import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../usuario.model';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  @Input() empleadoDlista:any;
  @Input() indiceDL:any;

  arrayCaracteristicas = [''];

  addCaracteristic(newCaracteristic: any) {
    this.arrayCaracteristicas.push(newCaracteristic);
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
