export class User {
    id?: number;
    email?: string;
    firstName?:string;
    lastName?: string;
    phone?:string;

    constructor(firstName: string, lastName: string, email: string, phone: string){
        this.firstName= firstName;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;

    }
}