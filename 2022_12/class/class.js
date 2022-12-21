class Coupon{
    constructor(price, expiration){
        this.price = price;
        this.expiration = expiration || '2주';
    }

    getPriceText(){
        return `${this.price}`;
    }

    getExpirationMessage(){
        return `expriation : ${this.expiration}`;
    }
}

const coupon = new Coupon(10,'1주');
const coupon2 = new Coupon(10);

console.log(coupon.getExpirationMessage());
console.log(coupon.getPriceText());

console.log(coupon2.getExpirationMessage());
console.log(coupon2.getPriceText());