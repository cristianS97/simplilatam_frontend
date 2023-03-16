import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable()
export class EmpresaService {
    public url: string;

    constructor(
        private myHttpClient: HttpClient
    ){
        this.url = Global.url;
    }

    getEmpresas(): Observable<any> {
        return this.myHttpClient.get(this.url + 'listadoEmpresa/');
    }
}