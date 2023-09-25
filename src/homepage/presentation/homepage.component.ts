import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public showCards: boolean = false;
  public isDesktop: boolean = false;
  public isMobile: boolean = false;

  ngOnInit(): void {
    this.checkScreenWidth();     
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


