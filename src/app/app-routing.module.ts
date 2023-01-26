import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'cart', component:CartComponent},
  {path: 'order', component:OrderComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'location', component: LocationComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
