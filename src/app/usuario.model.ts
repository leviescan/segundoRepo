export class Empleado{

    nombre:string='';
    apellido:string='';
    cargo:string='';
    salario:number=0;

    constructor(nombrec:string, apellidoc:string, cargoc:string, salarioc:number ){

        this.nombre=nombrec;
        this.apellido=apellidoc;
        this.cargo=cargoc;
        this.salario=salarioc;

    }
}