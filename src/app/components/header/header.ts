import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {
//     TranslateService,
//     TranslatePipe,
//     TranslateDirective
// } from "@ngx-translate/core";


@Component({
  selector: 'wh-header',
  standalone: true,
  imports: [
    RouterModule,
    // TranslatePipe, 
    // TranslateDirective
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // private translate = inject(TranslateService);

  constructor() {
    // this.translate.addLangs(['ru', 'en' , 'ge']);
    // this.translate.setFallbackLang('en');
    // this.translate.use('en');
  }

  protected redirectToFacebookPage(): void {
    window.open('https://www.facebook.com/warm.home.849875', '_blank');
  }
}
