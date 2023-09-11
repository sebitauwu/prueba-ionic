import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltimoPage } from './ultimo.page';

const routes: Routes = [
  {
    path: '',
    component: UltimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimoPageRoutingModule {}
