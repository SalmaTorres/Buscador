function Sumar(conjuntoDeNumeros){
    let suma = 0;
    for (let posicionNumero = 0; posicionNumero < conjuntoDeNumeros.length; posicionNumero++) 
    {
        if(conjuntoDeNumeros[posicionNumero] <= 1000){
            suma = suma + conjuntoDeNumeros[posicionNumero];
        }
    }
    return suma;
}

function SumarCadena(cadenaDeNumeros){
    if(cadenaDeNumeros.length === 1)
    {
        return parseInt(cadenaDeNumeros);
    }
    if(cadenaDeNumeros.length > 1)
    {
        let conjuntoDeNumeros = cadenaDeNumeros.split(/[,-]/).map(Number);
        return Sumar(conjuntoDeNumeros);
    }
    return 0;
}

export default SumarCadena;