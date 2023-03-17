import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { IndexComponent } from './components/index/index.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

const routes: Routes = [
  { path:'', component:IndexComponent },
  { path:'empleados', component:EmpleadosComponent },
  { path:'empresas', component:EmpresasComponent },
  { path:'empresa/:id', component:EmpresaComponent },
  { path:'empleado/:id', component:EmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
