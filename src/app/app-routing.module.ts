import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoAPIComponent } from './consumo-api/consumo-api.component';

const routes: Routes = [
  { path: 'consumo-api', component: ConsumoAPIComponent },
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
