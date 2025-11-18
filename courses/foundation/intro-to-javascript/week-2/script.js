
/*
Assignment #1 
- Create a function to get Fullname returning fullname
- Call the function with 2 params firstname & lastname
- Log out the fullname
*/

console.log("#########################################################");

console.log("Assignment #1");

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

const firstName = "Saranya";
const lastName = "Gopinath";

const fullName = getFullName(firstName,lastName);
console.log("Full Name is "+fullName);

console.log("#########################################################");

/*
Assignment #2
- Add extra parameter useFormalName - boolean
- If true - adds Lord in front of Name
- What do we do if useFormalName is not given as an argument? - set default as false
- Describe how you would fix the getFullName so it also works for women
*/

console.log("Assignment #2");

function getFullName2(firstName, lastName,useFormalName ){

    if(useFormalName){

        return `Lord ${firstName} ${lastName}`
    }

}

const firstName2 = "Benjamin";
const lastName2 = "Hughes";

const fullName2 = getFullName2(firstName2,lastName2,true);
console.log("Full Name is "+fullName2);

console.log("##### Function compatible for women too....#####");


function getFullName3(firstName, lastName, gender, useFormalName = false){

    if(useFormalName){
        return gender === "male" ? 
        `Lord ${firstName} ${lastName}` : `Lady ${firstName} ${lastName}`
    }
    else{

        return `${firstName} ${lastName}`
    }

}

const firstName3 = "Saranya";
const lastName3 = "Gopinath";
let gender = "female";
let useFormalName = true;

const fullName3 = getFullName3(firstName3,lastName3,gender,useFormalName);
console.log("Full Name is "+fullName3);

console.log("#########################################################");


/*
Assignment #3
- Create a function to give the weekday the event is held
- A param of no. of days from today is given to the function
- Hint: use remainder operator, array indexes and investigate new Date in js.
*/
console.log("Assignment #3");

function getEventWeekday(numOfDaysToEvent){
    // Need to know today's day
    // Create an array of weekdays
    // Use Modulo for 7 days a week

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = new Date().getDay();
    let daysToEvent = numOfDaysToEvent % 7;
    console.log(`${numOfDaysToEvent} days from today, Event Weekday would be ${weekdays[day + daysToEvent]}`);

}

getEventWeekday(7);

console.log("#########################################################");

/*
Assignment #4
- Create a function that has a param temperature
- Function must return the string what user should wear
*/
console.log("Assignment #4");
function selectOutfitForTemp(tempInDeg){
    if(temp < 5){
        return "Winter jackets & gloves";
    }
    else if(temp > 5 && temp <20){
        return "Sweatshirts & Light jackets";
    }
    else{
        return "Light dresses";
    }
}
let temp = 18;
let outFit = selectOutfitForTemp(temp);
console.log(`OutFit to wear for the temperature ${temp} degrees is ${outFit}`);

console.log("#########################################################");

/*
Assignment #5
1st function
- Add students to the array not more than 6
- Same person can't be added
- Even the class is full Queen is allowed to add in the class
- Can't add empty string to the class
2nd function
- To get the number of students in the class
*/


console.log("Assignment #5");

const class07Students = ["Stud1", "Stud2", "stud3", "stud4"];
// const class07Students = [];

function addStudentToClass(studentName) {
  // Check student name for Queen
  // Check the array for length and check it includes the name already
if(studentName !== "Queen"){
    if(class07Students.length < 6 && studentName.length > 0){
        (!class07Students.includes(studentName)) ? class07Students.push(studentName) : 
        console.log(`${studentName} is already in the class`);
    }
    else{
        console.log("Cannot add more students to class 07");
    }
}
else{
    class07Students.push(studentName);
    console.log("Queen added even the class is full");
}
}

function getNumberOfStudents() {
  // return the number of students in the class
  return class07Students.length;
}

const addTest = addStudentToClass("Saranya");
const duplicateTest = addStudentToClass("Saranya");
addStudentToClass("Sara");
const queenTest = addStudentToClass("Queen");
const emptyTest = addStudentToClass("");

console.log({class07Students});

const totalNumOfStudents = getNumberOfStudents();
console.log("Total number of students : "+totalNumOfStudents);

console.log("#########################################################");

/*
Optional Assignment
- Create function with 2 params - candyType & weight
- add the price of the candy to an array boughtCandyPrices
- 
*/

console.log("Optional Assignment");

let boughtCandyPrices = [];
function addCandy(candyType, weight){
    const pricePerGram = {
        Sweet : 0.5,
        Chocolate : 0.7,
        Toffee : 1.1,
        Chewing_gum : 0.3
    };
    console.log(pricePerGram[candyType]); 
    console.log(pricePerGram.candyType); // Dot Notation cannot be used in this case to access the value from the object

    const priceOfCandy = pricePerGram[candyType] * weight;
    boughtCandyPrices.push(priceOfCandy);
    console.log(`Candy Prices ${boughtCandyPrices}`);
}

addCandy("Sweet", 20);

/*
Learnings:
- Bracket Notation - Evaluates the var "candyType" to string "Sweet" and then lookup
- Dot Notation - Directly lookup for the key "candyType". The key doesn't exist. - undefined
*/

addCandy("Chocolate", 5);
addCandy("Toffee", 10);
function canBuyMoreCandy(){
    let amountToSpend = Math.random() * 100;
    console.log("Amount to Spend :::: "+amountToSpend);
    let totalCandiesPrice = 0;
    for(let i=0; i< boughtCandyPrices.length; i++){
        totalCandiesPrice += boughtCandyPrices[i];
    }
    console.log("Total Candies Price ::: "+totalCandiesPrice);
    return amountToSpend - totalCandiesPrice > 0 ? "You can buy more, so please do!" : "Enough candy for you!";
}

let message = canBuyMoreCandy();
console.log(message);


console.log("#########################################################");













