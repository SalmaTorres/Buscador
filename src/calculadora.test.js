import SumarCadena from "./calculadora.js";

describe("Calculadora", () => {
    it("Deberia devolver 0 cuando se ingresa una cadena vacia", () => {
      expect(SumarCadena("")).toEqual(0);
    });
    it("Deberia devolver un numero cuando se ingresa una cadena con un solo numero", () => {
        expect(SumarCadena("2")).toEqual(2);
      });
});