import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  localCart: OrderItem[] = [];

  constructor(private cookieService: CookieService) {

  }

  private getLocalCart(): OrderItem[] {
    if (this.cookieService.check('cart')) {
      this.localCart = JSON.parse(this.cookieService.get('cart'));
      return this.localCart;
      //return Object.values(this.localMap);
    } else {
      this.localCart = [];
      return [];
    }

  }
  getCart(): Observable<OrderItem[]> {
    //this.clearLocalCart()
    const localCart = this.getLocalCart();
    console.log(localCart);
    return of(localCart);
  }

  addItem(orderItem: OrderItem): Observable<boolean> {
    if (this.cookieService.check('cart')) {
      this.localCart = JSON.parse(this.cookieService.get('cart'));
    }
    console.log(this.localCart);
    let index = this.localCart.findIndex(e => e.makeupItem.id === orderItem.makeupItem.id);
    if (index === -1) {
      this.localCart.push(orderItem);
    }
    else {
      this.localCart[index].amount += orderItem.amount;
    }

    this.cookieService.set('cart', JSON.stringify(this.localCart));
    return of(true);
  }

  updateItems(orderItems: OrderItem[]) {
    this.cookieService.set('cart', JSON.stringify(orderItems));
  }

  sendOrder(orderItems: OrderItem[]) {


  }
}
