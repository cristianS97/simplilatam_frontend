import { Component } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  providers: [EmpresaService]
})

export class EmpresasComponent {
  public empresas:Array<any>;
  public nuevaEmpresa:any;

  constructor(
    private myEmpresaService: EmpresaService
  ) {
    this.empresas = [];

    this.nuevaEmpresa = {
      nombre: '',
      direccion: '',
      rut: '',
      telefono: ''
    };
  }

  ngOnInit() {
    this.myEmpresaService.getEmpresas().subscribe(response => this.empresas = response);
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

      this.nuevaEmpresa = {
        nombre: '',
        direccion: '',
        rut: '',
        telefono: ''
      };
    }
  }
}
