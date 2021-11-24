"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProxy = void 0;
class PaymentProxy {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    pay() {
        console.log('Accesing proxy pay method...');
        this.paymentMethod.pay();
        console.log('Exiting proxy pay method');
    }
}
exports.PaymentProxy = PaymentProxy;
//# sourceMappingURL=payment_proxy.js.map