import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../models/OrderItem';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource: OrderItem[] = [];
  displayedColumns: string[] = ['id', 'name', 'amount', 'cost'];
  
  constructor(private cartService: CartService){

  }
  
  ngOnInit(): void {

    this.cartService.getCart().subscribe(orders => {
      this.dataSource = orders;
  });

  }

  getTotalCost() {
    return this.dataSource.reduce((acum, oi) => acum + (oi.amount * oi.makeupItem.price), 0);;

  }



}


