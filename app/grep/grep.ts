import { readFileSync } from "fs";

// all arguments passed 
const args = process.argv.slice(2);
const filename = args[0];

const searchString = args[1];


const contents = readFileSync(filename, "utf8")
// line by line split
const lines = contents.split("\n");


// old version of loop error
for (let i= 0; i<lines.length; i++){

    if(lines[i].includes(searchString)){
        console.log(lines[i])
    }
}