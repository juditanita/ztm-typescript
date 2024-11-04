/* eslint-disable */
import { strict as assert } from "assert";


const writing = true;
const reading =!writing;

const rating = 9;
const favoriteMovie = false;

const suggestMovies = rating >8 || favoriteMovie
//error since its not equal
assert.equal(suggestMovies,true)