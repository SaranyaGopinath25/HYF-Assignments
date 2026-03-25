// Function As a Variable

/*
Exercise : 1
Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

Exercise : 2
Create a function as a const and try creating a function normally. Call both functions.

*/

// Function expression can be called only after initialization else it throws an error.
const firstFunction = () => {
  console.log("First Function!!");
};

// const secondFunction = () => {
//     console.log("Second Function!!");
// }

const thirdFunction = () => {
  console.log("Third Function!!");
};

const functionArray = [firstFunction, secondFunction, thirdFunction];

functionArray.forEach((functionToCall) => functionToCall());

// Function declaration can be called before initialization as well.
function secondFunction() {
  console.log("Second Function!!");
}

/*
Exercise : 3
Create an object that has a key whose value is a function. Try calling this function.
*/

const functionObject = {
  function1: firstFunction,
  function2: secondFunction,
  function3: thirdFunction,
};

functionObject.function1();
functionObject.function2();
functionObject.function3();
