/* eslint-disable */
import { strict as assert } from "assert";

// Classes are a way to define blueprints for objects. They encapsulate data
// and behavior and can be used to create instances of objects with predefined
// properties and methods. Classes can be extended and inherited, allowing for
// the creation of complex object hierarchies.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/classes.html
//

class Color{
    r: number = 0;
    g: number = 0;
    b: number =0;
}

const red = new Color();
red.r=255;

const redValue = red.r;


class Dimenstion{
    length:number;
    width:number;
    height: number;

    constructor(length:number,public heigth: number){
        this.length= length;
       this.height=heigth;
        this.width=1;
    }
}

const one = new Dimenstion(23,40);


class Point{
    x:number;
    y:number;
    


    constructor(x:number, y:number){
        this.x=x;
        this.y=y;
    }

    translate(x:number, y:number){
        this.x +=x;
        this.y +=y;
    }
}

const p = new Point(4,5);
 let newP = p.translate(8,9);
 console.log(newP);
 assert.deepEqual([p.x,p.y], [0,0])


