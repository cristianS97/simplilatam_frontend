import { Component } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  providers: [EmpresaService]
})

export class EmpresasComponent {
  public blur: boolean = false;
  public empresas:Array<any>;
  public nuevaEmpresa:Empresa;

  constructor(
    private myEmpresaService: EmpresaService
  ) {
    this.empresas = [];

    this.nuevaEmpresa = new Empresa(0, '', '', '', '');
  }

  ngOnInit() {
    this.myEmpresaService.getEmpresas().subscribe(response => this.empresas = response);
  }

  onClick() {
    this.blur = !this.blur;
  }

  empresaValida() {
    return this.nuevaEmpresa.nombre.trim().length > 0 &&
            this.nuevaEmpresa.direccion.trim().length > 0 &&
            this.nuevaEmpresa.rut.trim().length > 0 &&
            this.nuevaEmpresa.telefono.trim().length > 0;
  }

  onSubmit() {
    if(this.empresaValida()) {
      this.myEmpresaService.crearEmpresa(this.nuevaEmpresa).subscribe(response => {
        this.empresas.push(response);
      });
      this.onClick();

      this.nuevaEmpresa = new Empresa(0, '', '', '', '');
    }
  }
}
