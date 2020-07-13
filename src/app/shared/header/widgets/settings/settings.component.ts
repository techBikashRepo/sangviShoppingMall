import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header-widgets',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() { }

  public changeLanguage(lang) {
    this.translate.use(lang)
  }

}
