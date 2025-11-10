/* Javascript Week-1 Assignments */

// Assignment #1 - Age-ify (A future age calculator)

const yearOfBirth = 1986;
const yearFuture = 2045;

const age = yearFuture - yearOfBirth;

console.log("Assignment #1");

console.log("If your year of Birth is "+yearOfBirth);

console.log("You will be "+age+" years old in "+yearFuture);



// Assignment #2 - Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2022;

const dogYearFuture = 2030;

const dogYears = (dogYearFuture - dogYearOfBirth) * 7;

const shouldShowResultInDogYears = true;

console.log("Assignment #2");

if(shouldShowResultInDogYears){

    console.log(`Your dog will be ${dogYears} dog years old in 2030`);
}
else{
    console.log(`Your dog will be ${dogYears/7} human years old in 2030`);
}



// Assignment #3 - Housey pricey (A house price estimator)

const actualHousePricePeter = 2500000;
const actualHousePriceJulia = 1000000;

const estimatedHousePricePeter = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
const estimatedHousePriceJulia = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;

console.log("Assignment #3");

console.log(
    estimatedHousePricePeter > actualHousePricePeter ? `Peter paid too much for his house` : `Peter paid too little for his house`
)

console.log(
    estimatedHousePriceJulia > actualHousePriceJulia ? `Julia paid too much for her house` : `Julia paid too little for her house`
)



// Assignment #4 - Ez Namey (Startup name generator)

const firstWords = ["Easy", "Awesome", "Cool", "Dynamic", "Flexy", "Zen", "Sync", "Big", "Smart","Tele"];
const secondWords = ["Flow", "Data", "Labs", "Grid", "Corporation", "Byte", "Sphere", "Send", "Corp", "Deck"];

const randomNum = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNum]+" "+secondWords[randomNum];

console.log("Assignment #4");

console.log(`The startup: ${startupName} contains ${startupName.length} characters`);

