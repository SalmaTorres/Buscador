function BuscarProyecto(nombreProyecto, proyectos){
    if(proyectos.length === 0){
        return "";
    }
    if(proyectos[0] === nombreProyecto){
        return nombreProyecto;
    }
}

export default BuscarProyecto;