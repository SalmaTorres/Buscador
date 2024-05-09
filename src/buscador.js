function BuscarProyecto(NombreProyectoBuscado, ListaProyectos){
    let ProyectosEncontrados = [];
    let CantidadProyectosEncontrados = 0;
    for(const ProyectoAComparar of ListaProyectos){
        if(ProyectoAComparar.startsWith(NombreProyectoBuscado)){
            ProyectosEncontrados.push(ProyectoAComparar);
            CantidadProyectosEncontrados += 1;    
        }
    }
    if (CantidadProyectosEncontrados === 0) {
        return "";
    }
    if (CantidadProyectosEncontrados === 1) {
        return ProyectosEncontrados[0];
    }
    return ProyectosEncontrados;
}

export default BuscarProyecto;