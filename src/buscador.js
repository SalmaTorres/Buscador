function BuscarProyecto(nombreProyecto, proyectos){
    if(proyectos.length === 0){
        return "";
    }
    for(const proyecto of proyectos){
        if(proyecto === nombreProyecto){
            return proyecto
        }
    }
}

export default BuscarProyecto;