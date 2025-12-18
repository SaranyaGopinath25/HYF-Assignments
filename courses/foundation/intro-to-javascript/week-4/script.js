/*
Assignment #1
Voice assistant
*/

let userName = "";
let todoList = [];
function getReply(command) {
  
  if(typeof command !== "string"){
    console.log("Invalid Command");
    return;
  }

  const mathArr = ["+", "-", "*", "/", "%"];
  let commandAsArray = command.split(" ");
  console.log("##### " + commandAsArray);
  if (!Array.isArray(commandAsArray)) {
    return "Invalid command";
}
  console.log(commandAsArray.indexOf("+"));

  let matchedMathOperation = [];
  matchedMathOperation = commandAsArray.filter((command) =>
    mathArr.includes(command)
  );
  console.log("Math Operation :::::" + matchedMathOperation);

  // Name logic
  if (command.toLowerCase().startsWith("my name is")) {
    const nameIndex = commandAsArray.indexOf("is") + 1;
    console.log(commandAsArray);
    userName = commandAsArray[nameIndex];
    console.log(userName);
    return `Nice to meet you ${userName}!!`;
  }

  if (command.toLowerCase().startsWith("what is my name")) {
    if (userName.length > 0) {
      return `Your name is ${userName}`;
    } else {
      return `I don't know your name yet`;
    }
  }

  // Add todo logic
  if (command.toLowerCase().endsWith("to my todo")) {
    let count = commandAsArray.length;
    console.log(count);
    let todo = commandAsArray.slice(1, count - 3);
    let todoItem = todo.join(" ");
    todoList.push(todoItem);
    return `"${todoItem}" added to your todo!`;
  }

  // Remove todo logic
  if (command.toLowerCase().endsWith("from my todo")) {
    console.log("Remove");
    let count = commandAsArray.length;
    console.log(count);
    let slicedCommand = commandAsArray.slice(1, count - 3);
    let todoItem = slicedCommand.join(" ");
    todoList = todoList.filter((todo) => !todo.includes(todoItem));
    return `Removed ${todoItem} from your todo`;
  }


  // List todo logic
  if (command.toLowerCase().startsWith("what is on my todo")) {
    let count = todoList.length;
    return `You have ${count} todos. ${todoList}`;
  }


  // Today's date logic
  if (command.toLowerCase().startsWith("what day is it today")) {
    const dateArray = new Date().toDateString().split(" ");
    console.log(dateArray);
    return `Today's date is ${dateArray[2]} of ${dateArray[1]} ${dateArray[3]}`;
  }



  // Math logic
  if (matchedMathOperation.length > 0) {
    console.log(
      "There is math operation to perform : " + matchedMathOperation.length
    );
    const indexOfOperator = commandAsArray.indexOf(matchedMathOperation[0]);
    console.log(indexOfOperator);
    if(indexOfOperator === -1 || indexOfOperator === 0 || indexOfOperator === commandAsArray.length -1){
        return "Invalid Math Command";
    }
    const num1 = Number(commandAsArray[indexOfOperator - 1]);
    const num2 = Number(commandAsArray[indexOfOperator + 1]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return "Not a valid numbers";
}
    console.log("NUM1 : " + num1);
    console.log("NUM2 : " + num2);


    let result;
    switch(matchedMathOperation[0]){
        case "+" : result = num1 + num2;
        break;
        case "-" : result = num1 - num2;
        break;
        case "*" : result = num1 * num2;
        break;
        case "/" : result = num1 / num2;
        break;
        case "%" : result = num1 % num2;
        break;
        default: result = "Invalid operator";

    } 
    return `The result is ${result}`;
  }
  console.log("TO DO List ::::: " + todoList);



  // Timer logic
  if (command.toLowerCase().startsWith("set a timer for")) {
    const minutes = commandAsArray[4];
    const timerInMillisecs = minutes * 60 * 1000;

    console.log(timerInMillisecs);
    setTimeout(() => {
      console.log("Timer done!!!");
    }, timerInMillisecs);
    return `Timer set for ${minutes} minutes`;
  }


  // Extra Command : How many letters are in my name ?
  if(command.toLowerCase().startsWith("how many letters are in my name ?")){
    if(userName.length > 0){
        return `Your name has ${userName.length} letters`;
    }
    else{
        return "I don't know your name yet!";
    }
  }
return "I don't understand the command.";

}



// Test cases
const command1 = "My name is Saranya";
const resp1 = getReply(command1);
const command2 = "Add singing in my shower to my todo";
const resp2 = getReply(command2);
const command3 = "Add fishing to my todo";
const resp3 = getReply(command3);
const command4 = "Add go to supermarket to my todo";
const resp4 = getReply(command4);
const command5 = "What is my name";
const resp5 = getReply(command5);
const command6 = "Remove fishing from my todo";
const resp6 = getReply(command6);
const command7 = "What is on my todo ?";
const resp7 = getReply(command7);
const command8 = "What day is it today?";
const resp8 = getReply(command8);
const command9 = "what is 45 * 43 ?";
const resp9 = getReply(command9);
const command10 = "Set a timer for 1 minutes";
const resp10 = getReply(command10);
const command11 = "How many letters are in my name ?";
const resp11 = getReply(command11);
console.log(`Reply for the command ${command1} >>>>>> ${resp1}`);
console.log(`Reply for the command ${command2} >>>>>> ${resp2}`);
console.log(`Reply for the command ${command3} >>>>>> ${resp3}`);
console.log(`Reply for the command ${command4} >>>>>> ${resp4}`);
console.log(`Reply for the command ${command5} >>>>>> ${resp5}`);
console.log(`Reply for the command ${command6} >>>>>> ${resp6}`);
console.log(`Reply for the command ${command7} >>>>>> ${resp7}`);
console.log(`Reply for the command ${command8} >>>>>> ${resp8}`);
console.log(`Reply for the command ${command9} >>>>>> ${resp9}`);
console.log(`Reply for the command ${command10} >>>>>> ${resp10}`);
console.log(`Reply for the command ${command11} >>>>>> ${resp11}`);


console.log("**************************************************************************");

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

console.log("Codewars Exercise #1");

function getCount(str) {
  if (typeof str !== "string") {
        return 0; 
    }
  let vowelsArr = ["a", "e", "i", "o", "u"];
  let stringArr = str.split("");
  let matchedVowels = stringArr.filter((item) => vowelsArr.includes(item));
  console.log("Matched Vowels :::::: " + matchedVowels);
  return matchedVowels.length;
}

let noOfVowelsInString = getCount("saranya");
console.log("No of vowels in the string is :::::: " + noOfVowelsInString);

//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

console.log(
  "**************************************************************************"
);

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

*/

console.log("Codewars Exercise #2");

function squareDigits(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
        return null; 
    }

  let numbersArr = num.toString().split("");
  let squaredNumArr = [];

  for (number of numbersArr) {
    let squaredNum = number * number;
    console.log(squaredNum);
    squaredNumArr.push(squaredNum);
  }

  return Number(squaredNumArr.join(""));
}

console.log(squareDigits(9119)); // should return 811181

console.log(
  "**************************************************************************"
);

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"


*/

console.log("Codewars Exercise #3");

const result = highAndLow("5 -9 2 4 7 1");
console.log(result);

function highAndLow(numbers) {
  
  let numArr = numbers.split(" ").map(Number);
  let highestNum = numArr[0];
  let lowestNum = numArr[0];
  for (let number of numArr) {
    if (number > highestNum) {
      highestNum = number;
    }
    if (number < lowestNum) {
      lowestNum = number;
    }
  }
  return `${highestNum} ${lowestNum}`;
}

console.log(
  "**************************************************************************"
);
