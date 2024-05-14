import calculadora from "./calcucandenas.js";

describe("Sumar", () => {
  it("deberia devolver 0 si se envia una cadena sin caracteres", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia devolver el unico valor que lleva la cadena", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("deberia devolver 6 si le enviamos una cadena con dos numeros: '2,4'", () => {
    expect(calculadora("2,4")).toEqual(6);
  });
  it("deberia devolver 26 si le enviamos una cadena con varios numeros: '2,4,5,4,1,10'", () => {
    expect(calculadora("2,4,5,4,1,10")).toEqual(26);
  });
});
