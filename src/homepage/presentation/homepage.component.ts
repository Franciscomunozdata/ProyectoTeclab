import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public cards : any[] = [];
  public showCards: boolean = false;
  public isDesktop: boolean = false;
  public isMobile: boolean = false;

  ngOnInit(): void {
    this.checkScreenWidth();
    this.cards.push(
      {
        id:1,
        title: 'Automatizar decisiones',
        text: 'Todas las empresas tienen que tomar decisiones. De hecho, las empresas son máquinas de información. Aquellos que pueden consumir, comprender y actuar sobre la mejor información de manera óptima tienen una ventaja inherente sobre sus competidores.',
        img:'../../assets/img/service-1.png'

      },
      {
        id:2,
        title: 'Simplifique los procesos',
        text: 'Los procesos van de la mano con los negocios. Por un lado, son necesarios procesos para estandarizar las prácticas. Pero rápidamente los procesos comienzan a consumir la agilidad de una empresa y se gastan sumas significativas en contratar personas para poner en práctica estos procesos.',
        img:'../../assets/img/service-2.png'
      },
      {
        id:3,
        title: 'Diferenciadores competitivos',
        text: 'Las empresas verdaderamente innovadoras son capaces de crear productos basados ​​en datos que proporcionan una ventaja competitiva tan increíble que toda competencia queda obsoleta.',
        img:'../../assets/img/service-3.png'
      }      
    );   
  }

  show(){
    this.showCards = !this.showCards;
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  
  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.isDesktop = screenWidth >= 992;
    this.isMobile = screenWidth < 991;
  }
}


