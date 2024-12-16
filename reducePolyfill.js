Array.prototype.myReduce = function(callback,initialValue){

    //Check if the context is valid array 
    if(!Array.isArray(this)){
        throw new TypeError("Context is not an array");
    }

    //Check if callback is a valid function
    if (typeof callback !== "function"){
        throw new TypeError(`${callback} is not a function`);
    }


    //if an empty array is passed with no initialValue
    if(initialValue===undefined && this.length===0){
        throw new TypeError("Reduce of empty array with no initial value")
    }


    //initialize accumulator and starting index 
    
    let accumulator = initialValue;
    let startIndex = 0;


    //If no initialVlaue is provided, use the first element of array

    if (initialValue === undefined){
        accumulator = this[0];
        startIndex = 1;
    }


    for (let i=startIndex; i<this.length; i++){
        accumulator = callback(accumulator,this[i],i,this);
    }

    return accumulator;
}

/** Run the below example code in IDE */
/** Example 1 */

// const arr = [1,2,3,4,5]

// const mul = arr.myReduce((acc,curr)=> acc*curr)
// console.log(mul);  //output 120


/** Example 2 */

// const arr = [1, 2, 3, 4, 5];

// const sumOddIndexes = arr.reduce((acc, curr, i) => {
//   if (i % 2 !== 0) { // Odd index
//     return acc + curr;
//   }
//   return acc;
// }, 0);

// console.log(sumOddIndexes); // Output: 6 (2 + 4)