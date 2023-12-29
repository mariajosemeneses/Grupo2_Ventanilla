import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { DepositoComponent } from './deposito/deposito.component';
import { RetiroComponent } from './retiro/retiro.component';


@NgModule({
  declarations: [
    AppComponent,
    DepositoComponent,
    RetiroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule {}
