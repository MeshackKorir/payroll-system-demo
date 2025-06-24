function isPowerTwo(n){
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerTwo(8)); 
console.log(isPowerTwo(6)); 
console.log(isPowerTwo(1));
console.log(isPowerTwo(0)); 