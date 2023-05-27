import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListadoArticulosComponent } from './listadoarticulos.component';

@NgModule({
  declarations: [AppComponent, ListadoArticulosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

