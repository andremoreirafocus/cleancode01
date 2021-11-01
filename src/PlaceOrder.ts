import ItemRepository from "./ItemRepository";
import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class PlaceOrder {
  constructor (readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {
  }

  execute(input: any): any {
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const item = this.itemRepository.findById(orderItem.idItem);
      order.addItem(item, orderItem.quantity)
    }
    this.orderRepository.save(order);
    return {
      total: order.getTotal()
    };
  }
}