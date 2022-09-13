import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { AuthControlComponent } from './components/auth-control/auth-control.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DevicePropService } from './support/device-prop.service';



@NgModule({
  declarations: [HeaderComponent, SlideMenuComponent, AuthControlComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ HeaderComponent, SlideMenuComponent, AuthControlComponent, NavBarComponent]
})
export class UiModule { }
