const calculadora = require("../models/calculadora.js");

describe("Calculadora", () => {
  describe("Somar", () => {
    test("devería somar dois números", () => {
      const resultado = calculadora.somar(2, 3);
      expect(resultado).toBe(5);
    });
  });
});
