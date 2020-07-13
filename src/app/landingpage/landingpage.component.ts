import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//declare var $: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets/js/script.js');
  }

}
