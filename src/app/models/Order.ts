import { Delivery } from "./Delivery.enum";
import { DeliveryType } from "./DeliveryType";
import { OrderItem } from "./OrderItem";
import { User } from "./User";

export class Order {
    id!:number;
    date!:Date;
    sum!:number;
    user!:User;
    address!: string;
    deliveryType!:DeliveryType;
    orderItems!:OrderItem[];

    constructor(firstName: string, lastName: string, phone: string, email: string, adress: string, delivery: Delivery, orderItems: OrderItem[] ){
     this.user= new User(firstName, lastName, email, phone);
     this.deliveryType= new DeliveryType(delivery);
     this.orderItems = orderItems;
     this.address = adress;
    }
    



}