function reverseString(str) {

  var strArray = str.split('');
//   console.log("after split:");  
//   console.log(strArray);
  strArray.reverse();
//   console.log("after reverse");
//   console.log(strArray);
  var reverseStr = strArray.join('');
//   console.log("joining");
//   console.log(reverseStr);
  
  return str.split('').reverse().join('');

}

console.log(reverseString("hello"));
