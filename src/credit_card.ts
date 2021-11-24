import { Payment } from "./payment.i";

export class CreditCard implements Payment {
    public pay(): void {
        console.log('CreditCard Payment - pay method');
    }
}