
/* ## Exercise 1
    Doubling of Number
    - Double the odd number
    - throw away the even number
*/

function doubleOddNum(){

    let numbers = [1, 2, 3, 4];
    let newNumbers = [];
    
    newNumbers = numbers.filter(isOddNum).map(number => number * 2)

    console.log("Output :::::: "+newNumbers);
    return newNumbers;

}

function isOddNum(number){
    return number %2 !== 0;
}

doubleOddNum();

// expected result: [2, 6]

