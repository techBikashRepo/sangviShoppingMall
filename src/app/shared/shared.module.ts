import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';

// components
import { HeaderOneComponent } from './header/header-one/header-one.component';
import { TopbarOneComponent } from './header/widgets/topbar/topbar-one/topbar-one.component';
import { NavbarComponent } from './header/widgets/navbar/navbar.component';
import { LeftMenuComponent } from './header/widgets/left-menu/left-menu.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { InformationComponent } from './footer/widgets/information/information.component';
import { CategoriesComponent } from './footer/widgets/categories/categories.component';
import { WhyWeChooseComponent } from './footer/widgets/why-we-choose/why-we-choose.component';
import { CopyrightComponent } from './footer/widgets/copyright/copyright.component';
import { SocialComponent } from './footer/widgets/social/social.component';
import { SettingsComponent } from './header/widgets/settings/settings.component';

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    HeaderOneComponent,
    FooterOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    HeaderOneComponent,
    FooterOneComponent,
    NavbarComponent,
    LeftMenuComponent,
    TopbarOneComponent,
    InformationComponent,
    CategoriesComponent,
    WhyWeChooseComponent,
    CopyrightComponent,
    SocialComponent,
    SettingsComponent
  ],
  providers: []
})
export class SharedModule { }
