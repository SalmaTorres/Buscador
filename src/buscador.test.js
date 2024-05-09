import BuscarProyecto from "./buscador.js";

describe("Buscar", () => {
    it("No encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
      let proyectos = [];
      expect(BuscarProyecto("ejercicio1", proyectos)).toEqual("");
    });
    it("Encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
        let proyectos = [];
        proyectos.push("miUnicoProyecto");
        expect(BuscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
    });
    it("Encuentra un proyecto cuando el mismo existe en una lista de varios proyecto", () => {
        let proyectos = [];
        proyectos.push("proyecto1");
        proyectos.push("proyecto2");
        proyectos.push("proyecto3");
        expect(BuscarProyecto("proyecto2", proyectos)).toEqual("proyecto2");
      });
    it("Buscar y encontrar mas de una coindencia de proyectos", () => {
        let proyectos = [];
        proyectos.push("proyecto1");
        proyectos.push("proyecto2");
        proyectos.push("proyecto3");
        proyectos.push("proyecto2");
        expect(BuscarProyecto("proyecto2", proyectos)).toEqual(["proyecto2","proyecto2"]);
    });
    it("Buscar y encontrar proyectos cuyo nombre empieza con el criterio de busqueda", () => {
        let proyectos = [];
        proyectos.push("ejercicio1");
        proyectos.push("ejercicio2");
        proyectos.push("proyecto3");
        proyectos.push("proyecto4");
        expect(BuscarProyecto("ejerc", proyectos)).toEqual(["ejercicio1","ejercicio2"]);
    });
    it("Buscar y no encontrar proyecto en una lista de proyectos", () => {
        let proyectos = [];
        proyectos.push("proyecto1");
        proyectos.push("proyecto2");
        proyectos.push("proyecto3");
        proyectos.push("proyecto4");
        expect(BuscarProyecto("ejercicio1", proyectos)).toEqual("");
      });
});