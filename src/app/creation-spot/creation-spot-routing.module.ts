import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationSpotPage } from './creation-spot.page';

const routes: Routes = [
  {
    path: '',
    component: CreationSpotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationSpotPageRoutingModule {}
