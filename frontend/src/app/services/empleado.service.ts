import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable()
export class EmpleadoService {
    public url: string;

    constructor(
        private myHttpClient: HttpClient
    ){
        this.url = Global.url;
    }

    getEmpleados(): Observable<any> {
        return this.myHttpClient.get(this.url + 'listadoEmpleado/');
    }

    crearEmpleado(empleado:any): Observable<any> {
        let params = JSON.stringify(empleado);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.myHttpClient.post(this.url + 'crearEmpleado/', params, {headers: headers});
    }
}