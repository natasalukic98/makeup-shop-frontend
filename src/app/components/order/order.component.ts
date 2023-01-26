import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { OrderItem } from 'src/app/models/OrderItem';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Delivery } from '../../models/Delivery.enum';
import { DeliveryType } from '../../models/DeliveryType';
import { OptionValue } from '../../models/OptionValue.interface';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  deliveryOption!: String[]; 
  deliveryTypes!: OptionValue[];
  order: Order | undefined;
  orderItems: OrderItem[] = [];
  constructor(private orderService: OrderService, private cartService:CartService){

  }
  form: FormGroup= new FormGroup ({
    firstName: new FormControl ('', [Validators.required, Validators.minLength(3)]), 
    lastName: new FormControl  ('', [Validators.required, Validators.minLength(3)]), 
    adress: new FormControl  ('', [Validators.required, Validators.minLength(3)]), 
    deliveryType: new FormControl (this.deliveryTypes,  [Validators.required]),
    phone: new FormControl ('', [Validators.required,Validators.minLength(3)]), 
    email: new FormControl ('', [Validators.required, Validators.email]), 

  });

  ngOnInit(): void {
    this.deliveryTypes = this.getValuesFromEnum();
    console.log(this.deliveryTypes);
    this.cartService.getCart().subscribe(orders => {
      this.orderItems = orders;
    });

  }

  getValuesFromEnum(): OptionValue[] {
    return Object.keys(Delivery).map((key, index) => {
      return { key, value: Object.values(Delivery)[index] };
    });
  }
  getTotalCost() {
    return this.orderItems.reduce((acum, oi) => acum + (oi.amount * oi.makeupItem.price), 0);;

  }

  sendOrder(): void {
    console.log(this.form.value)
    this.order = new Order(this.form.value.firstName, this.form.value.lastName, this.form.value.phone, this.form.value.email, this.form.value.address, this.form.value.deliveryType,this.orderItems);
    console.log(this.order);
    this.orderService.sendOrder(this.order).subscribe();
  }
}

