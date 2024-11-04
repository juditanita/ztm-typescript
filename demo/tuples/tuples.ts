/* eslint-disable */
import { strict as assert } from "assert";


// Tuples provide a way to express an array with a fixed number of elements of
// different types, creating a data structure with multiple different types.
// They can be especially handy when dealing with scenarios such as
// representing coordinates, storing key-value pairs, or returning multiple
// values from a function. Since they are type-checked, TypeScript can ensure
// that the values in the tuple are correct at compile time.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
//


type Title = string;
type PublisedYear = number;

type Book = [Title, PublisedYear]

const sample: Book =["new year hope", 2078]

const bookTitle:Title = "New Year Hope";
assert.strictEqual(sample[0].toUpperCase(), bookTitle.toUpperCase());

function coordinates():[number, number]{
    return[3,5]
}


const [x,y ]= coordinates();
assert.equal(x,3)
assert.equal(y,5)


const mulitTuple :[number, number][]=[
    coordinates(),
    [1,9],
    [3,4],
    [2,1]
]


