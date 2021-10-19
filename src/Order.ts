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
  private coupon: Coupon | undefined;
  private orderItems: OrderItem[];
  private freight: number;

  constructor (cpf: string, readonly issueDate: Date = new Date()) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
    this.freight = 0;
  }

  addItem (item: Item, quantity: number) {
    this.freight += item.getFreight() * quantity;
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.issueDate)) return;
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

  getFreight() {
    return this.freight;
  }
};