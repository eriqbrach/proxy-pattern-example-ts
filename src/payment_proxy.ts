import { CashPayment } from "./cash_payment";
import { CreditCard } from "./credit_card";
import { Payment } from "./payment.i";

export class PaymentProxy implements Payment {
    private paymentMethod: CreditCard | CashPayment;

    constructor(paymentMethod: CreditCard | CashPayment) {
        this.paymentMethod = paymentMethod;
    }

    public pay(): void {
        console.log('Accesing proxy pay method...');
        this.paymentMethod.pay();
        console.log('Exiting proxy pay method');
    }
}