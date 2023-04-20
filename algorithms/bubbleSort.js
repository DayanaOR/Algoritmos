/*
    complejidad temporal -->  O( n² )
    complejidad espacial -->  O(n)
    espacio auxiliar --> O(1)
*/

function bubbleSort(arreglo){
    let longitud = arreglo.length; // Complejidad temporal O(1)  && Compeljidad espacial O(1)
    for (let i = 0; i < longitud; i++) { // Complejidad temporal O(n^2) && Compeljidad espacial O(1)
        for (let j = 0; j < longitud; j++) { // Complejidad temporal O(n) && Compeljidad espacial O(1)
            if(arreglo[j] > arreglo[j + 1]){ // Complejidad temporalo(1)&&  Compeljidad espacial O(1)
                let temporal = arreglo[j]; // Complejidad temporal O(1) && Compeljidad espacial O(1)
                arreglo[j] = arreglo[j + 1]; // Complejidad temporal O(1) && Compeljidad espacial
                arreglo[j + 1] = temporal; // Complejidad temporal O(1) && Compeljidad espacial
            }
            
        }
    } 
    return arreglo; //o(1)
}