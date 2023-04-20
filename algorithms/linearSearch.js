/*
En la complejidad lineal se tiene en cuenta el (n) ya que N es mayor a (100 ) o (+3)
    complejidad temporal -->  O(n)
    complejidad espacial -->  O(n)
    espacio auxiliar --> (compejidad espacial) menos ( - )espacio ocupado por (espacios de entrada )
*/
function linearSearch(arreglo, clave){ //Compeljidad espacial O(n)
    for(let indice = 0; indice < arreglo.lenght; indice++){ // complejidad temporal O(n) && Compeljidad espacial O(1)
        if(arreglo[inidce] === clave){ // O(1)
            return indice; // O(1)
        }
    }
    return -1; // O(1)
}