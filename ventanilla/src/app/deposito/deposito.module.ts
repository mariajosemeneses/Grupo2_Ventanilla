// deposito.module.ts (o el nombre de tu módulo)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginaClienteModule } from '..//app-pagina-cliente.module';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    CommonModule,
    AppPaginaClienteModule,  // Agrega el módulo a la lista de imports
    // Otros módulos pueden agregarse aquí
  ],
})
export class DepositoModule {}
