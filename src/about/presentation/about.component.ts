import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public valores : any[] = [];

  ngOnInit(): void {
    this.valores.push(
      {
        id:1,
        title: 'Excelencia',
        text: 'Fomentamos la creatividad y la innovación continua para encontrar soluciones efectivas a problemas complejos.',
        img:'../../assets/img/excelencia.png'

      },
      {
        id:2,
        title: 'Innovación',
        text: 'Fomentamos la creatividad y la innovación continua para encontrar soluciones efectivas a problemas complejos.',
        img:'../../assets/img/inno.png'
      },
      {
        id:3,
        title: 'Integridad',
        text: 'Actuamos con honestidad y ética en todas nuestras interacciones, manteniendo la confianza de nuestros clientes.',
        img:'../../assets/img/solucion.png'
      } ,
      {
        id:4,
        title: 'Colaboración',
        text: 'Trabajamos en estrecha colaboración con nuestros clientes y colegas para lograr los mejores resultados.',
        img:'../../assets/img/apoyar.png'
      }      
    );   
  }
}
