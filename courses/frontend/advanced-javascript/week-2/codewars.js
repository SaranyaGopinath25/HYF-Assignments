/* Exercise : 1
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
*/

// Product left and right approach

const array = [1, 2,3,4,5];

function createProductArray(arr){

    const pdtArray = arr.map((num) => {
        const index = arr.indexOf(num);
        const leftPdt = arr.slice(0,index).reduce((accumulator,currentIndex) => accumulator * currentIndex,1);
        const rightPdt = arr.slice(index+1).reduce((accumulator,currentIndex) => accumulator * currentIndex,1);
        return leftPdt * rightPdt;
    })
    return pdtArray;
}

console.log(createProductArray(array));



// const array = [1, 2,3,4,5];

// function createProductArray(arr){

//     const pdtArray = arr.map((num) => {
//         const index = arr.indexOf(num);
//         const splicedArr = arr.toSpliced(index,1);
//         console.log("SPLICED ARR ::::: "+splicedArr);
//         const initialValue = 1;
//         let product = splicedArr.reduce((accumulator,currentIndex) => 

//             accumulator * currentIndex, initialValue
//         )
//         console.log("PDT :::: "+product);
//         return product;
//     })
//     return pdtArray;
// }

// console.log(createProductArray(array));