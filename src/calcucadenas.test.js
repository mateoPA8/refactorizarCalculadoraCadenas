import calculadora from "./calcucandenas.js";

describe("Sumar", () => {
  it("deberia devolver 0 si se envia una cadena sin caracteres", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia devolver el unico valor que lleva la cadena", () => {
    expect(calculadora("1")).toEqual(1);
  });
});
