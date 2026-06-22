

// Codewars

// Ex : 1 - Removing Elements

function removeEveryOther(arr){
  //your code here
  const newArr = [];
  for(let i=0; i < arr.length; i+=2){
    newArr.push(arr[i]);
  }
  return newArr;
}
removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);


//Ex : 2 To square(root) or not to square(root)

function squareOrSquareRoot(array) {
  const newArray = array.map((item) => {
    const sqrtVal = Math.sqrt(item);
    const isInt = Number.isInteger(sqrtVal);
    return isInt ? sqrtVal : item * item
    
  })
  return newArray;  
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]);
