import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { IndexComponent } from './components/index/index.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmpresasComponent,
    EmpleadosComponent,
    IndexComponent,
    EmpresaComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
