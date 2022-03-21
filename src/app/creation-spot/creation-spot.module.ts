import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationSpotPageRoutingModule } from './creation-spot-routing.module';

import { CreationSpotPage } from './creation-spot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationSpotPageRoutingModule
  ],
  declarations: [CreationSpotPage]
})
export class CreationSpotPageModule {}
