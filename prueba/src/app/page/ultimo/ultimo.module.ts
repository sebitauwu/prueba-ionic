import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltimoPageRoutingModule } from './ultimo-routing.module';

import { UltimoPage } from './ultimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltimoPageRoutingModule
  ],
  declarations: [UltimoPage]
})
export class UltimoPageModule {}
