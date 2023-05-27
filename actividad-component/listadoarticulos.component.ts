import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  template: `
    <h2>Listado de artículos</h2>
    <table>
      <thead>
        <tr>
        <th>Nintendo Switch</th>
          <th>1000000</th>
          <th>Consola Nintendo</th>
          <th>Nintendo Switch Oled</th>
          <th>2000000</th>
          <th>Consola Nintendo</th>
          <th>Paly Station 5 </th>
          <th>2000000</th>
          <th>Consola Sony</th>
          <th>Xbox series s </th>
          <th>2000000</th>
          <th>Consola Xbox</th>
          <th>Xbox series X </th>
          <th>2000000</th>
          <th>Consola Xbox</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let producto of productos">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
          <td>{{ producto.descripcion }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class ListadoArticulosComponent {
  @Input() productos: any[];
}
