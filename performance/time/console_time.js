function countNumbers(n){
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
console.time('Duración del contador:');
countNumbers(5);
console.timeEnd('Duración del contador:');