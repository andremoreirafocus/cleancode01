import Cpf from "./Cpf";

test("Não deve validar um CPF inválido", () => {
  expect(() => new Cpf("111.111.111-12")).toThrow(new Error ("Invalid CPF"));
});

test("Deve validar um CPF válido", () => {
  const cpf = new Cpf("909.389.687-34");
  expect(cpf.value).toBe("909.389.687-34");
});