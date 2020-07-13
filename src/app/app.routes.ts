import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landingpage/landingpage.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'pages/about-us',
    pathMatch: 'full'
  },
  {
    path: 'landingpage',
    component: LandingPageComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'pages/about-us'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }