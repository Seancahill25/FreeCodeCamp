function findPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
    }
} 
  return true;
}
  function sumPrimes(num) {
    
    var total = 0;
    for (var i = 2; i <= num; i++) {
      if(findPrime(i)) {
        total += i;
      }
    } 
    return total;
}

sumPrimes(10);
