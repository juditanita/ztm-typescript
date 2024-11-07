/* eslint-disable */
import { strict as assert } from "assert";

// A `Map` is a data structure that allows you to store data in a key-value
// pair format. Keys in a map must be unique, and each key can map to only one
// value. You can use any type of value as the key, including objects and
// functions. Maps are useful when you want to quickly access data and you are
// able to maintain the key in memory. In situations where you have to search
// (you don't have a key) for the data you need, a difference data structure
// would be more appropriate.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

type Name = string;
type Score = number;
//                     key, value
const testScore : Map<Name, Score> = new Map();

testScore.set("Alice",98);
testScore.set("Bob",38);
testScore.set("Teddy",60);


assert.equal(testScore.size, 3);


  let nameDeleted;
for (const [name, score] of testScore){
 
if(score < 40){
       nameDeleted = name;
       testScore.delete(nameDeleted);   
    console.log(`${nameDeleted} needs to do the exam again.`);
    }
    else if(score > 90){
        console.log(`Well done ${name}.`)
    } else{
        console.log(`${name} has ${score}.`)

    }

}

assert.equal(testScore.has("Mark"),false);

for ( const name of testScore.keys()){
    console.log(name)
}

for ( const score of testScore.values()){
    console.log(score)
}
