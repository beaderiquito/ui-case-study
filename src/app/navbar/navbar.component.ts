import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbNavConfig]
})
export class NavbarComponent{

  constructor(config: NgbNavConfig) {
    //customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
   }

}
