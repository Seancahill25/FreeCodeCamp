function pairElement(str) {
  var newArray = [];
  var array = str.split('');
  
  for (var i = 0; i < array.length; i++)
    if (array[i] == "G"){
      newArray.push(["G","C"]);
    } else if (array[i] == "C"){
      newArray.push(["C","G"]);
    } else if (array[i] == "A"){
      newArray.push(["A","T"]);
    } else if (array[i] == "T"){
      newArray.push(["T","A"]);
    }
  
  return newArray;
}

pairElement("GCG");