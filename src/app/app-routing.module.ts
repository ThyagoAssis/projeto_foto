import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { FotolistComponent } from './fotolist/fotolist.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', component: FotolistComponent},
  {path:'form', component: FormularioComponent},

  /* a rota update vai receber um id */
  {path:'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
