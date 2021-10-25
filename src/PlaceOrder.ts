import Item from "./Item";
import Order from "./Order";

export default class PlaceOrder {
  items: Item[];
  constructor () {
    this.items = [
      new Item(1, "Instrumentos musicais", "Guitarra", 1000),
      new Item(2, "Instrumentos musicais", "Amplificador", 5000),
      new Item(3, "Instrumentos musicais", "Cabo", 30)
    ];
  }

  execute(input: any): any {
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const item = this.items.find(item => item.idItem === orderItem.idItem);
      if (!item) throw (new Error("Item not found!"));
      order.addItem(item, orderItem.quantity)
    }
    return {
      total: order.getTotal()
    };
  }
}