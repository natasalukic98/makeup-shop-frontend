import { Delivery } from "./Delivery.enum";

export class DeliveryType {
    id!: number;
    delivery!: Delivery

    constructor(delivery: Delivery){
        this.delivery = delivery;

    }
}