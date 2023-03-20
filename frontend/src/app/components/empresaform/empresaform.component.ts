import { Component, Output, EventEmitter } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-empresaform',
  templateUrl: './empresaform.component.html',
  styleUrls: ['./empresaform.component.css']
})
export class EmpresaformComponent {
  @Output() myOutput:EventEmitter<Empresa> = new EventEmitter<Empresa>();
  public nuevaEmpresa:Empresa;

  constructor(
    private myEmpresaService: EmpresaService
  ) {
    this.nuevaEmpresa = new Empresa(0, '', '', '', '');
  }

  empresaValida() {
    return this.nuevaEmpresa.nombre.trim().length > 0 &&
            this.nuevaEmpresa.direccion.trim().length > 0 &&
            this.nuevaEmpresa.rut.trim().length > 0 &&
            this.nuevaEmpresa.telefono.trim().length > 0;
  }

  propertyenviarNuevaEmpresa(response:any){
    this.myOutput.emit(response);
  }

  onSubmit() {
    if(this.empresaValida()) {
      this.myEmpresaService.crearEmpresa(this.nuevaEmpresa).subscribe(response => {
        this.propertyenviarNuevaEmpresa(response);
      });

      this.nuevaEmpresa = new Empresa(0, '', '', '', '');
    }
  }
}
