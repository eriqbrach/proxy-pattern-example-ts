"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credit_card_1 = require("./credit_card");
const payment_proxy_1 = require("./payment_proxy");
console.log('using credit card...');
const creditCardPayment = new credit_card_1.CreditCard();
console.log('');
console.log('init proxy');
const proxy = new payment_proxy_1.PaymentProxy(creditCardPayment);
proxy.pay();
console.log('end proxy execution...');
console.log('');
console.log('end proxy execution...');
//# sourceMappingURL=index.js.map