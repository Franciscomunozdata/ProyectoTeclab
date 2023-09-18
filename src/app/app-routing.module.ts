import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/presentation/about.component';
import { HomepageComponent } from 'src/homepage/presentation/homepage.component';

const routes: Routes = [
  { path: 'inicio', 
  component: HomepageComponent,
  loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepageModule)
 },
 { path: 'nosotros', 
 component: AboutComponent,
 loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
},
 { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
 { path: '**', redirectTo: '/inicio' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
