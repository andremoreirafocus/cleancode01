import OrderItem from "./OrderItem"

test("Deve criar um item de pedido e rtornar seu total corretamente", () => {
  const orderItem = new OrderItem(1, 200, 5);
  expect(orderItem.getTotal()).toBe(1000);
});