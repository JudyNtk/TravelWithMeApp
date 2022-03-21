import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSpotPageRoutingModule } from './detail-spot-routing.module';

import { DetailSpotPage } from './detail-spot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSpotPageRoutingModule
  ],
  declarations: [DetailSpotPage]
})
export class DetailSpotPageModule {}
