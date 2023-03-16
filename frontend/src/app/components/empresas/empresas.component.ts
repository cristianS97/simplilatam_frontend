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
      id: null,
      nombre: '',
      direccion: '',
      rut: '',
      telefono: ''
    };
  }

  ngOnInit() {
    this.myEmpresaService.getEmpresas().subscribe(response => this.empresas = response);
  }

  onSubmit() {
    if(this.nuevaEmpresa.nombre.trim().length > 0 && this.nuevaEmpresa.direccion.trim().length > 0 && this.nuevaEmpresa.rut.trim().length > 0 && this.nuevaEmpresa.telefono.trim().length > 0) {
      this.nuevaEmpresa.id = this.empresas[this.empresas.length-1].id + 1;
      this.empresas.push(this.nuevaEmpresa);

      this.nuevaEmpresa = {
        id: null,
        nombre: '',
        direccion: '',
        rut: '',
        telefono: ''
      };
    }
  }
}
