import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
  providers: [EmpresaService]
})

export class EmpresaComponent {
  public datosEmpresa:any;
  constructor(
    public myEmpresaService: EmpresaService,
    private myActivatedRoute: ActivatedRoute,
    private myRouter: Router
  ) {}

  ngOnInit() {
    this.myActivatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.myEmpresaService.getEmpresa(id).subscribe(response => {
        this.datosEmpresa = response;
      });
    });
  }
}
