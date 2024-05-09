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
    it("Deberia devolver la suma de dos numeros que estan en una cadena", () => {
        expect(SumarCadena("1,2")).toEqual(3);
    });
    it("Deberia devolver la suma de varios numeros que estan en una cadena", () => {
        expect(SumarCadena("1,10,100")).toEqual(111);
    });
    it("Deberia devolver la suma de varios numeros que estan en una cadena separados por ',' o '-'", () => {
        expect(SumarCadena("1,2-3")).toEqual(6);
    });
    it("Deberia devolver la suma de los numeros que no sean mayores a 1000'", () => {
        expect(SumarCadena("1,2-10001-3")).toEqual(6);
    });
});