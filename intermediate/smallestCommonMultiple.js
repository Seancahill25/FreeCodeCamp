function smallestCommons(arr) {
  var min = arr[0], max = arr[1], temp;

  if (min>max) {
    temp = min; min = max ; max = temp;
  }

  var a, b, lim = min;

  for (var i = min; i< max; i++) {
    a = lim;
    b = i + 1;
    for (lim; lim % b !==0;lim += a);
  }

  return lim;
}


smallestCommons([1,5]);