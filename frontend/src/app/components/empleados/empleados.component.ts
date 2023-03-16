import { Component } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService, EmpresaService]
})
export class EmpleadosComponent {
  public empleados:Array<any>;
  public empresas:Array<any>;
  public nuevoEmpleado:any;

  constructor(
    private myEmpleadoService: EmpleadoService,
    private myEmpresaService: EmpresaService
  ) {
    this.empleados = [];
    this.empresas = [];

    this.nuevoEmpleado = {
      nombre: '',
      email: '',
      rut: '',
      empresa: ''
    };
  }

  ngOnInit() {
    this.myEmpleadoService.getEmpleados().subscribe(response => this.empleados = response);
    this.myEmpresaService.getEmpresas().subscribe(response => this.empresas = response);
  }

  empleadoValido() {
    return this.nuevoEmpleado.nombre.trim().length > 0 &&
            this.nuevoEmpleado.email.trim().length > 0 &&
            this.nuevoEmpleado.rut.trim().length > 0 &&
            this.nuevoEmpleado.empresa.trim().length > 0;
  }

  onSubmit() {
    if(this.empleadoValido()) {
      this.myEmpleadoService.crearEmpleado(this.nuevoEmpleado).subscribe(response => {
        this.empleados.push(response);
      });

      this.nuevoEmpleado = {
        nombre: '',
        email: '',
        rut: '',
        empresa: ''
      };
    }
  }
}
