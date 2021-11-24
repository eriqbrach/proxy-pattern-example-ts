import { Payment } from "./payment.i";

export class CashPayment implements Payment {
    public pay(): void {
        console.log('CashPayment Payment - pay method');
    }
}