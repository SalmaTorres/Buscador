import SumarCadena from "./calculadora.js";

describe("Calculadora", () => {
    it("Deberia devolver 0 cuando se ingresa una cadena vacia", () => {
      expect(SumarCadena("")).toEqual(0);
    });
    it("Deberia devolver un numero cuando se ingresa una cadena con un solo numero", () => {
        expect(SumarCadena("2")).toEqual(2);
    });
    it("Deberia devolver la suma de dos numeros que estan en una cadena", () => {
        expect(SumarCadena("1,2")).toEqual(3);
    });
});