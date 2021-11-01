import ItemRepositoryMemory from "./ItemRepositoryMemory";
import OrderRepositoryMemory from "./OrderRepositoryMemory";
import PlaceOrder from "./PlaceOrder";

test("Deve colocar umn pedido", () => {
  const input = {
    cpf: "909.389.687-34",
    orderItems: [
      {
        idItem: 1,
        quantity: 1
      },
      {
        idItem: 2,
        quantity: 1
      },
      {
        idItem: 3,
        quantity: 3
      },
    ]
  };
  const placeOrder = new PlaceOrder(new ItemRepositoryMemory, new OrderRepositoryMemory);
  const output = placeOrder.execute(input);
  expect(output.total).toBe(6090);
});
