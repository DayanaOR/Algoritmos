//Medir que variables o arreglos bidimensionales o tridimensionales se crean mediante la ejecucion de arreglo 
function count(n){
    for (let i = 0; i < n; i++) {
        console.log(i); 
    }
}

function repeat(arrangement){
    let repeat_arrangement = arrangement; 
    return repeat_arrangement; 
}
function converToString(arrangement){
    let result = arrangement.map(element => element.toString());
    return result;  
}

function dosDimensiones(valor){
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill(0)
    }
    return x; 
}
console.log(dosDimensiones(5))
//console.log(converToString([1, 2, 3, 4]));