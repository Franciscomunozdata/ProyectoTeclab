import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public whatsappNumber = '5491140788374';
  public isDesktop: boolean = false;
  public isMobile: boolean = false;
  
 

  ngOnInit(): void {
    this.checkScreenWidth();
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

  openWA(){
    const whatsappUrl = `https://wa.me/send?phone=${this.whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  openInsta(){ 
    window.open('https://instagram.com/tecnobilateral?igshid=MzRlODBiNWFlZA==', '_blank');   
  }
}
