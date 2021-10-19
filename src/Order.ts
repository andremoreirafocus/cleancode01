import Coupon from './Coupon';
import Cpf from './Cpf'
import Item from './Item';
import OrderItem from './OrderItem';

interface CPFParts {
  extractedNumber: string,
  extractedControl: string
}

export default class Order {
  cpf: Cpf;
  coupon: Coupon | undefined;
  orderItems: OrderItem[];
  constructor (cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem (item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  getTotal(): number {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) 
      return total * (1 - this.coupon.getPercentage());
    return total;
  }
};