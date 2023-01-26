import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order';
import { OrderItem } from '../../models/OrderItem';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource: OrderItem[] = [];
  displayedColumns: string[] = ['id', 'name', 'amount', 'cost'];


  constructor(private cartService: CartService, private orderService: OrderService) {

  }

  ngOnInit(): void {

    this.cartService.getCart().subscribe(orders => {
      this.dataSource = orders;
    });

  }

  getTotalCost() {
    return this.dataSource.reduce((acum, oi) => acum + (oi.amount * oi.makeupItem.price), 0);;

  }

  onChangeAmount(orderItem: OrderItem) {
    this.dataSource.map(i=> i.makeupItem.id == orderItem.makeupItem.id ? orderItem: i);
    this.cartService.updateItems(this.dataSource);
  }




}


