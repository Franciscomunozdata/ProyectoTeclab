import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPresupuestoComponent } from '../modal-presupuesto/modal-presupuesto.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu : any[] = [];
  public isDesktop: boolean = false;
  public isMobile: boolean = false;

  constructor(
    private modalController: ModalController,
    private rouer: Router
  ){

  }

  ngOnInit(): void {
    this.checkScreenWidth();

    this.menu.push(
      {
        id:1,
        title: 'Inicio'
      },
      {
        id:2,
        title: '¿Quiénes somos?'
      },
      {
        id:3,
        title: 'Productos & Servicios'
      },     
      {
        id:5,
        title: 'Solicitar presupuesto'
      }
    );    
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

  clickMenu(item:any){
    switch(item.id){
      case 1:{
        this.rouer.navigateByUrl('inicio');
      }
      break;
      case 2:{
        this.rouer.navigateByUrl('nosotros');
      }
      break;
      case 3:{
        this.rouer.navigateByUrl('servicios');
      }
      break;     
      break;
      case 5:{
        this.openModal();
      }
      break;
    }  
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPresupuestoComponent,
      componentProps: {
        key: 'value', // Puedes pasar datos al modal a través de componentProps
      },
    });
    await modal.present();
  }
}
