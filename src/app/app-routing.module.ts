import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotolistComponent } from './fotolist/fotolist.component';

const routes: Routes = [
  {path:'', component: FotolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
