import { CashPayment } from "./cash_payment";
import { CreditCard } from "./credit_card";
import { PaymentProxy } from "./payment_proxy";

console.log('using credit card...');
const creditCardPayment = new CreditCard();
console.log('');
const cashPayment = new CashPayment();

console.log('init proxy');
let proxy = new PaymentProxy(creditCardPayment);
proxy.pay();
console.log('end proxy execution...');
proxy = new PaymentProxy(cashPayment);
proxy.pay();
console.log('');

console.log('end proxy execution...');
