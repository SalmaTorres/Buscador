function Sumar(numeros){
    let suma = 0;
    for (let indice = 0; indice < numeros.length; indice++) 
    {
        if(numeros[indice] <= 1000){
            suma = suma + numeros[indice];
        }
    }
    return suma;
}

function SumarNumerosEn(cadena){
    if(cadena.length === 1)
    {
        return parseInt(cadena);
    }
    if(cadena.length > 1)
    {
        let numeros = cadena.split(/[,-]/).map(Number);
        return Sumar(numeros);
    }
    return 0;
}

export default SumarNumerosEn;