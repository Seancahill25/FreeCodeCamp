function chunkArrayInGroups(arr, size) {
  var empty = [];
   for(var i = 0; i < arr.length; i+=size) {
     empty.push(arr.slice(i,i+size));
   }
  return empty;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
