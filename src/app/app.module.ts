import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent} from './web/top-bar/top-bar.component';
import { MenuLeftComponent } from './web/menu-left/menu-left.component';
import { MenuRightComponent } from './web/menu-right/menu-right.component';
import { FooterComponent } from './web/footer/footer.component';

import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { NormalModule } from './normal/normal.module';

import {ProductService} from './/services/product-server.service';

declare const NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MenuLeftComponent,
        MenuRightComponent,
        FooterComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        SellerModule,
        NormalModule,
        BuyerModule,
        NgbModule.forRoot(),
        routing
    ],
    providers: [ProductService],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((event) => {

      if(event instanceof NavigationStart) {
        NProgress.start();
      }

      if(event instanceof NavigationEnd) {
        setTimeout(function(){
          NProgress.done();
        }, 200);
      }

    });
  }
}
