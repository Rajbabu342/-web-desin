function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Print the Fibonacci Series
const numTerms = 10; // Change this value to the number of terms you want

console.log('Fibonacci Series:');

for (let i = 0; i < numTerms; i++) {
    // Calculate each term and print it
    console.log(fibonacci(i));
}