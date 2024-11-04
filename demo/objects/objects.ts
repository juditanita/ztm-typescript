/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
//



type Coordinate ={
    x:number;
    y:number;
  
}

const origin:Coordinate ={
    x:0,
    y:0
}

const xPosition = origin.x;
const yPosition = origin.y;


//assert.equal(xPosition,0);
//throw and error cos it is not working
//assert.equal(yPosition,4);

let coord:Coordinate ={x:3, y:5}
coord.x = 8;
coord.y = 7;

//assert.deepEqual(coord, {x:4, y:8})
//assert.deepEqual(coord, {x:8, y:7})


function calculateDistance(coord: Coordinate){
    const distance =Math.sqrt(coord.x **2 + coord.y**2);
    console.log(distance);
}

calculateDistance({x:3, y:4});