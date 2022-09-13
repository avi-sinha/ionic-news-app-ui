import { Component, OnInit } from '@angular/core';
import { DevicePropService } from 'src/app/ui/support/device-prop.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isMobile:boolean;

  constructor(private deviceProp: DevicePropService) {
    this.deviceProp.isMobileView().subscribe(isMobile => {
      this.isMobile = isMobile;
      console.log('Is Mobile:',isMobile);
    });
  }

  ngOnInit() {
  }

}
