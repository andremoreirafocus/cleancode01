import Coupon from "./Coupon"

test("Deve criar um coupon de desconto com validade não expirada", () => {
  const coupon = new Coupon("VALE20", 20, new Date("2022-03-01"));
  expect(coupon.isExpired(new Date("2022-02-01"))).toBeFalsy();
});

test("Deve criar um coupon de desconto com validade expirada", () => {
  const coupon = new Coupon("VALE20", 20, new Date("2021-03-01"));
  expect(coupon.isExpired(new Date("2022-03-01"))).toBeTruthy();
});

test("Deve criar um coupon de desconto que nunca expira", () => {
  const coupon = new Coupon("VALE20", 20);
  expect(coupon.isExpired(new Date("2022-03-01"))).toBeFalsy();
});