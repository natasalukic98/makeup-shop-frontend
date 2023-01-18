import { DeliveryType } from "./DeliveryType";
import { OrderItem } from "./OrderItem";
import { User } from "./User";

export class Order {
    id!:number;
    date!:Date;
    sum!:number;
    user!:User;
    deliveryType!:DeliveryType;
    orderItems!:OrderItem[];
    



}