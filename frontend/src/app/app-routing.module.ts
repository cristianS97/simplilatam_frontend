import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path:'', component:IndexComponent },
  { path:'empleados', component:EmpleadosComponent },
  { path:'empresas', component:EmpresasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
