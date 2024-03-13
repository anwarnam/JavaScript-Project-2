// Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// Count Characters:

function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Hello, my name is anwar!")); 

// Capitalize Words:

function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

console.log(capitalizeWords("hello , my name is anwar")); 

// Find Maximum and Minimum:

function findMaximum(arr) {
    if (arr.length === 0) return; 
    return Math.max(...arr);
}

function findMinimum(arr) {
    if (arr.length === 0) return; 
    return Math.min(...arr);
}

const numbers = [5, 10, 9, 1, 7];
console.log("Maximum:", findMaximum(numbers)); 
console.log("Minimum:", findMinimum(numbers));

// Sum of array :

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const Numbers = [5, 3, 9, 13, 7];
console.log("Sum:", sumArray(Numbers));

// Filter array:

function filterArray(arr, condition) {
    return arr.filter(condition);
}

const nums = [5, 3, 9, 1, 7];
const evenNums = filterArray(nums, num => num % 2 === 0);
console.log("Even numbers:", evenNums); 

// Factorial:

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

// Prime Number Check:

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(17)); 
console.log(isPrime(10));

// Fibonacci Sequence :

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }
    return sequence.slice(0, n);
}

console.log(fibonacci(8)); 

