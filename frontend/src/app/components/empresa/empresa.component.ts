import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';

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
    private myActivatedRoute: ActivatedRoute
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
