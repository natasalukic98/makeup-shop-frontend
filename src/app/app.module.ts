import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ResponsiveToolbarComponent } from './components/responsive-toolbar/responsive-toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationComponent } from './components/location/location.component';
import { initializeKeycloak } from './util/app.init';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveToolbarComponent,
    HomeComponent,
    ItemComponent,
    CartComponent,
    OrderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    KeycloakAngularModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    {provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
