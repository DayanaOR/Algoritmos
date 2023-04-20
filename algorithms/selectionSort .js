/*
    complejidad temporal -->  O( n² )
    complejidad espacial -->  O(n)
    espacio auxiliar --> O(1)
*/

function selectionSort(arreglo) { // Complejidad espacial O(n)
    let longitud = arreglo.length; // Complejidad temporal O(1)  && Complejidad espacial O(1)
  
    for (let i = 0; i < longitud; i++) { // Complejidad temporal O(n^ 2) && Complejidad espacial O(1)
      let minimo = i; // Complejidad temporal O(1)  && Complejidad espacial O(1)
      for (let j = i + 1; j < longitud; j++) { // Complejidad temporal O(n)  && Complejidad espacial O(1)
        if (arreglo[j] < arreglo[minimo]) { // Complejidad temporal O(1)  
          minimo = j; // Complejidad temporal O(1)  
        }
      }
      if (minimo != i) { // Complejidad temporal O(1) 
        let temporal = arreglo[i]; // Complejidad temporal O(1)  && Complejidad espacial O(1)
        arreglo[i] = arreglo[minimo]; // Complejidad temporal O(1) 
        arreglo[minimo] = temporal; // Complejidad temporal O(1) 
      }
    }
    return arreglo; // O(1)
  }