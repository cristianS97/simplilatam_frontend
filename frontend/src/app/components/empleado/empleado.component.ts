import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent {
  public datosEmpleado:any;
  constructor(
    public myEmpleadoService: EmpleadoService,
    private myActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.myEmpleadoService.getEmpleado(id).subscribe(response => {
        this.datosEmpleado = response;
        console.log(this.datosEmpleado);
      });
    });
  }
}
