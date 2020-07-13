import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
declare var $: any;

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderOneComponent implements OnInit {

  constructor(private fix: LandingFixService) { }

  ngOnInit() {
    $.getScript('assets/js/menu.js');
  }

  openNav() {
    this.fix.addNavFix();
  }

  closeNav() {
    this.fix.removeNavFix();
  }
}
