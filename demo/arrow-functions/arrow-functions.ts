/* eslint-disable */

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//


const sum = (lsh:number, rsh:number):number=>{
    return lsh + rsh;
}


const multiplication = (lsh:number, rsh:number):number=>{
    return lsh * rsh;
}
const add=sum(3,8);
console.log(add);

//function signiture
type calculationFn = (lhs:number, rhs:number)=>number;

function calculate(fn:calculationFn, lhs:number, rhs:number){
    const result= fn(lhs, rhs)
    if(result === 7){
        console.log("Lucky 7 winner high price")
    }
  return  fn(lhs, rhs)

}

const answer =calculate(sum, 56,45);
 console.log(answer)

 const answerMult= calculate(multiplication, 7,1)
 console.log(answerMult)
