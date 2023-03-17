import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    crearEmpresa(empresa:any): Observable<any> {
        let params = JSON.stringify(empresa);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.myHttpClient.post(this.url + 'crearEmpresa/', params, {headers: headers});
    }

    getEmpresa(idEmpresa:number): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.myHttpClient.get(this.url + 'empresaDetail/' + idEmpresa, {headers: headers});
    }
}