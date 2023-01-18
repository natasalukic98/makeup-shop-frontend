import { MakeupItem } from "./MakeupItem";

export class OrderItem {
    id!: number;
    amount!: number;
    finalPrice!: number;
    makeupItem!: MakeupItem;

    constructor(amount: number, makeupItem: MakeupItem){
        this.amount = amount;
        this.makeupItem = makeupItem;
    }

}