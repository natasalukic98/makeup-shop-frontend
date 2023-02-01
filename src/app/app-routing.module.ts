import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { AuthGuard } from './util/auth.guard';

const routes: Routes = [
  {path:'home', canActivate: [AuthGuard], component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'cart', canActivate: [AuthGuard], component:CartComponent},
  {path: 'order', canActivate: [AuthGuard], component:OrderComponent},
  {path: 'aboutUs',canActivate: [AuthGuard], component: AboutUsComponent},
  {path: 'contact',canActivate: [AuthGuard], component: ContactComponent},
  {path: 'location',canActivate: [AuthGuard], component: LocationComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
