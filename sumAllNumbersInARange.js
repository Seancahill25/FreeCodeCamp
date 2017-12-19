function sumAll(arr) {
var total = 0;
var max = Math.max(...arr);
var min = Math.min(...arr);
     for(var i = min; i <= max; i++) {
       total += i;
     }
  
  return total;
}

sumAll([10, 5]);
