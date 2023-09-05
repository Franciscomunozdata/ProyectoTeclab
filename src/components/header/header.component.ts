import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu : any[] = [];

  ngOnInit(): void {
    this.menu.push(
      {
        id:1,
        title: 'Inicio'
      },
      {
        id:2,
        title: 'Productos'
      },
      {
        id:3,
        title: 'Servicios'
      },
      {
        id:4,
        title: 'Contacto'
      }
    );    
  }
}
