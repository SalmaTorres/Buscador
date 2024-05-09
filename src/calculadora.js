function SumarCadena(cadenaDeNumeros){
    if(cadenaDeNumeros.length === 1)
    {
        return parseInt(cadenaDeNumeros);
    }
    if(cadenaDeNumeros.length === 3)
    {
        const numero1 = parseInt(cadenaDeNumeros[0]);
        const numero2 = parseInt(cadenaDeNumeros[2]);
        return numero1 + numero2;
    }
    return 0;
}

export default SumarCadena;