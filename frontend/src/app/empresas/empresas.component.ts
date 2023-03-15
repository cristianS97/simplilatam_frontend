import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})

export class EmpresasComponent {
  public empresas:Array<any>;
  public nuevaEmpresa:any;

  constructor() {
    this.empresas = [
      {id:1, nombre:'GM Consulting', direccion:'Dirección fictisia 1', rut:'11.111.111-1', telefono:'+56912345678'},
      {id:2, nombre:'Sunday Constructing', direccion:'Dirección fictisia 2', rut:'22.222.222-2', telefono:'+56923456789'}
    ];

    this.nuevaEmpresa = {
      id: null,
      nombre: '',
      direccion: '',
      rut: '',
      telefono: ''
    };
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
