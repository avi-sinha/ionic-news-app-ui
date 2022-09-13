import { Component, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DevicePropService } from './ui/support/device-prop.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private dvService:DevicePropService, private platform:Platform) {
    this.initApp();
  }

  initApp(){
    this.platform.ready().then(
      () => {
        this.dvService.onResize(this.platform.width());
      }
    );

  }

  @HostListener('window:resize',['$event'])
    private onResize(event){
      this.dvService.onResize(this.platform.width());
    }
}
