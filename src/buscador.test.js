import BuscarProyecto from "./buscador.js";

describe("Buscar", () => {
    it("No encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
      let proyectos = [];
      expect(BuscarProyecto("ejercicio1", proyectos)).toEqual("");
    });
});