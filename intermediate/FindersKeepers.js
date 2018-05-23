function findElement(arr, func) {
 var filter = arr.filter(func);
  return filter[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
