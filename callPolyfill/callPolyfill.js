Function.prototype.myCall = function(context,...args){
    
    //default context - global object
    context = context || globalThis

    const uniqueFn = Symbol('fn');

    //assign function(this) to the context
    context[uniqueFn] = this;

    const result = context[uniqueFn](...args);

    delete context[uniqueFn];

    return result;
}

//Run the below examples


/**
 * Example 1
 * const person1 = {
 *      greet() {
 *          return `Konnichiwa ${this.name}. Douzo yoroshiku!!`
 *      }
 * }
 * 
 * const person = {
 *      name:"Jhon Doe"
 * }
 * 
 * const res = person1.greet.myCall(person)
 * 
 */


/** Example 2 */
// function greet(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
// }
  
// const person = { name: 'John' };
  
// // Using the polyfill
// const res = greet.myCall(person, 'Hello', '!');
// console.log(res);