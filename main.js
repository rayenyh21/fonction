function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizefirstWord(sentence) {
    
        return (sentence[0].toUpperCase() +sentence.substring(1));
}

function findMax_Min(arr) {
    return ( Math.max(...arr) & Math.min(...arr)) ;
}

function sumArray(arr) {
    sum=0;
    for (var i=0;i<length.arr ;i++ ){
        sum+=arr[i]
    }


    return sum;
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

function factorial(num) {
    if (num === 0 || num === 1){
        return 1;}
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
function isPrime(num) {
    somdiv=1;
    for (var i=2; i<num+1 ;i++) {
        if (num % i ==0){
            somdiv+=1;
        }

    }
    if (somdiv===2){
        return true;
    } 

}
function generateFibonacci(numTerms) {
    let fibonacciSequence = [];

    // Fonction  pour calculer le terme de Fibonacci à un index donné
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    
    for (let i = 0; i < numTerms; i++) {
        fibonacciSequence.push(fibonacci(i));
    }

    return fibonacciSequence;
}
}