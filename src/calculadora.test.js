import SumarCadena from "./calculadora.js";

describe("Calculadora", () => {
    it("Deberia devolver 0 cuando se ingresa una cadena vacia", () => {
      expect(SumarCadena("")).toEqual(0);
    });
});