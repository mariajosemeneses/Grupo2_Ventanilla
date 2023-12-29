// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from '../deposito/deposito.component';
import { RetiroComponent } from '../retiro/retiro.component';

const routes: Routes = [
  { path: 'deposito', component: DepositoComponent },
  { path: 'retiro', component: RetiroComponent },
  { path: '', redirectTo: '/deposito', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
