import { Component, Output, EventEmitter } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleadoform',
  templateUrl: './empleadoform.component.html',
  styleUrls: ['./empleadoform.component.css'],
  providers: [EmpleadoService, EmpresaService]
})
export class EmpleadoformComponent {
  @Output() myOutput:EventEmitter<Empleado> = new EventEmitter<Empleado>();
  public empresas:Array<any>;
  public nuevoEmpleado:Empleado;

  constructor(
    private myEmpleadoService: EmpleadoService,
    private myEmpresaService: EmpresaService
  ) {
    this.nuevoEmpleado = new Empleado(0, '', '', '', '');
    this.empresas = [];
  }

  ngOnInit() {
    this.myEmpresaService.getEmpresas().subscribe(response => this.empresas = response);
  }

  empleadoValido() {
    return this.nuevoEmpleado.nombre.trim().length > 0 &&
            this.nuevoEmpleado.email.trim().length > 0 &&
            this.nuevoEmpleado.rut.trim().length > 0 &&
            this.nuevoEmpleado.empresa.trim().length > 0;
  }

  enviarNuevoEmpleado(response:any){
    this.myOutput.emit(response);
  }

  onSubmit() {
    if(this.empleadoValido()) {
      this.myEmpleadoService.crearEmpleado(this.nuevoEmpleado).subscribe(response => {
        this.enviarNuevoEmpleado(response);
      });

      this.nuevoEmpleado = new Empleado(0, '', '', '', '');
    }
  }
}
