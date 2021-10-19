import Item from "./Item";

test("Deve criar um item", () => {
  const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, 100, 30, 10);
  const expectedItem = {
    idItem: 1, 
    category: "Instrumentos musicais", 
    description: "Guitarra",
    price: 1000,
    length: 100,
    width: 30,
    depth: 10,
    weigth: 0,
  };
  expect(item).toEqual(expectedItem);
});

test("Deve criar um item e calcular o volume", () => {
  const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, 100, 30, 10);
  const volume = item.getVolume();
  expect(volume).toBe(0.03);
});

test("Deve criar um item e calcular a densidade", () => {
  const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, 100, 30, 10, 3);
  const density = item.getDensity();
  expect(density).toBe(3/0.03);
});

test("Deve criar um item e calcular o frete", () => {
  const item = new Item(1, "Instrumentos musicais", "Guitarra", 1000, 100, 30, 10, 3);
  const freight = item.getFreight();
  expect(freight).toBe(0.03 * 10 * 100);
});

test("Deve criar um item e calcular o frete mínimo", () => {
  const item = new Item(1, "Instrumentos musicais", "Cabo", 30, 10, 10, 10, 0.9);
  const freight = item.getFreight();
  expect(freight).toBe(9.99);
});