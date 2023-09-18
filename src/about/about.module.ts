import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './presentation/about.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    IonicModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
