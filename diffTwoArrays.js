function diffArray(arr1, arr2) {
  var newarr = [];
  
 function sameArray(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newarr.push(arr1[i]);
    }
  }
}
  sameArray(arr1,arr2);
  sameArray(arr2,arr1);
  
  return newarr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
