//En visual studio code por lo general el performance.now no funciona sin añadir lo siguiente
// const performance = require('perf_hooks) y se pe agrega asi --> performance.performance.now 

function countNumbers(n){
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
let startTime = performance.now()
countNumbers(5)
let endTime = performance.now()
let totalTime = endTime - startTime; 

console.log(`El algorítmo contar duro: ${totalTime} miliSegundos en ejecutarse`);