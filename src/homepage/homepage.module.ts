import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './presentation/homepage.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/components/components.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    IonicModule,
    ComponentsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageModule { }
