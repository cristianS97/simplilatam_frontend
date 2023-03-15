import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  public empleados:Array<any>;
  public nuevoEmpleado:any;

  constructor() {
    this.empleados = [
      {id:1, nombre:'Pepe Gutierrez', email:'pepe@correo.com', rut:'33.333.333-3', empresa:1},
      {id:2, nombre:'Valentina Toro', email:'valentin@correo.com', rut:'44.444.444-4', empresa:1},
      {id:3, nombre:'Manuel Cataldo', email:'manuel@correo.com', rut:'55.555.555-5', empresa:1},
      {id:4, nombre:'Ana Jarpa', email:'ana@correo.com', rut:'66.666.666-6', empresa:2},
      {id:5, nombre:'Matías Jorquera', email:'matias@correo.com', rut:'77.777.777-7', empresa:2},
      {id:6, nombre:'Claudia Cortez', email:'claudia@correo.com', rut:'88.888.888-8', empresa:2}
    ];

    this.nuevoEmpleado = {
      id: null,
      nombre: '',
      email: '',
      rut: '',
      empresa: ''
    };
  }

  onSubmit() {
    if(this.nuevoEmpleado.nombre.trim().length > 0 && this.nuevoEmpleado.email.trim().length > 0 && this.nuevoEmpleado.rut.trim().length > 0 && this.nuevoEmpleado.empresa.trim().length > 0) {
      this.nuevoEmpleado.id = this.empleados[this.empleados.length-1].id + 1;
      this.empleados.push(this.nuevoEmpleado);

      this.nuevoEmpleado = {
        id: null,
        nombre: '',
        email: '',
        rut: '',
        empresa: ''
      };
    }
  }
}
