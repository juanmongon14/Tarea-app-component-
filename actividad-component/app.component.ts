import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Componente principal</h1>
    <app-listadoarticulos [productos]="productos"></app-listadoarticulos>
  `,
})
export class AppComponent {
  productos = [
    {
      nombre: 'Nintendo switch',
      precio: 1000000,
      descripcion: 'Consola nintendo ',
    },
    {
      nombre: 'Play station 5',
      precio: 2000000,
      descripcion: 'Consola Sony',
    },
    {
      nombre: 'Xbobx series s',
      precio: 2000000,
      descripcion: 'Consola Xbox',
    },
    {
      nombre: 'Xbosx series x',
      precio: 2000000,
      descripcion: 'Consola Xbox',
    },
    {
      nombre: 'Nintendo switch Oled',
      precio: 2000000,
      descripcion: 'Consola nintendo ',
    },
  ];
}
