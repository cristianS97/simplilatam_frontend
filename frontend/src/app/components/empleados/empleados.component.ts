import { Component } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent {
  public blur: boolean = false;
  public empleados:Array<any>;

  constructor(
    private myEmpleadoService: EmpleadoService,
  ) {
    this.empleados = [];
  }

  onClick() {
    this.blur = !this.blur;
  }

  ngOnInit() {
    this.myEmpleadoService.getEmpleados().subscribe(response => this.empleados = response);
  }

  GetChildData(data:any){  
    this.onClick();
    this.empleados.push(data);
  }
}
