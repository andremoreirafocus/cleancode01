import Coupon from "./Coupon";
import Item from "./Item";
import Order from "./Order";

test("Não deve criar um pedido com um cpf inválido", () => {
  expect(() => new Order("111.111.111-12")).toThrow(new Error("Invalid CPF"));
  // expect(() => new Order("909.389.687-34")).toThrow(new Error("Invalid CPF"));
});

test("Deve criar um pedido se o cpf for válido", () => {
  const order = new Order("909.389.687-34");
  expect(order).toBeDefined();
});

test("Deve criar um pedido com 3 itens", () => {
  const order = new Order("909.389.687-34");
  order.addItem(new Item(1, "Instrumentos musicais", "Guitarra", 1000),1);
  order.addItem(new Item(2, "Instrumentos musicais", "Amplificador", 5000),1);
  order.addItem(new Item(3, "Instrumentos musicais", "Cabo", 30),3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto válido", () => {
  const order = new Order("909.389.687-34");
  order.addItem(new Item(1, "Instrumentos musicais", "Guitarra", 1000),1);
  order.addItem(new Item(2, "Instrumentos musicais", "Amplificador", 5000),1);
  order.addItem(new Item(3, "Instrumentos musicais", "Cabo", 30),3);
  order.addCoupon(new Coupon("VALE20", 20));
  const total = order.getTotal();
  expect(total).toBe(6090*(1-20/100));
});

test("Deve criar um pedido com 3 itens com cupom de desconto", () => {
  const order = new Order("909.389.687-34", new Date("2021-10-18"));
  order.addItem(new Item(1, "Instrumentos musicais", "Guitarra", 1000),1);
  order.addItem(new Item(2, "Instrumentos musicais", "Amplificador", 5000),1);
  order.addItem(new Item(3, "Instrumentos musicais", "Cabo", 30),3);
  order.addCoupon(new Coupon("VALE20", 20, new Date("2021-10-10")));
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens", () => {
  const order = new Order("909.389.687-34");
  order.addItem(new Item(1, "Instrumentos musicais", "Guitarra", 1000, 100, 30, 10, 3),1);
  order.addItem(new Item(2, "Instrumentos musicais", "Amplificador", 5000, 100, 50, 50, 20),1);
  order.addItem(new Item(3, "Instrumentos musicais", "Cabo", 30, 10, 10, 10, 0.9),3);
  const freight = order.getFreight();
  expect(freight).toBe(259.97);
});
