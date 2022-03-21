import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSpotPage } from './detail-spot.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSpotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSpotPageRoutingModule {}
