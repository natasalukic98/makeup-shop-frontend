import { Component, Input, OnInit } from '@angular/core';
import { MakeupItem } from '../models/MakeupItem';
import { OrderItem } from '../models/OrderItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  item!:MakeupItem;

  orderAmount!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderAmount=1;
  }

  addToCart(){
    this.cartService.addItem(new OrderItem(this.orderAmount, this.item));
  }


  
}


