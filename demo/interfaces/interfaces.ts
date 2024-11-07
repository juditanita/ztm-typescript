/* eslint-disable */
import { strict as assert } from "assert";
import { forEach } from "core-js/core/array";

// Interfaces provide a way to define the shape of objects or classes. They
// define the contracts that objects must follow, specifying the properties and
// methods that an object must have. Interfaces make it easier to write
// type-safe code by providing a way to ensure that objects are of the correct
// shape before they are used in a program. They also allow for code to be more
// modular and reusable, since objects can be easily swapped out as long as
// they adhere to the interface's contract.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
//


interface Area{
    // signiture method
    area():number;
}

interface Peremeter{
    perimeter():number
}

class Rectangle implements Area,Peremeter{

    length:number = 7;
    width:number = 5;

    area():number{
        return this.width * this.length;
    }

    perimeter(): number {
        return (this.width * this.length)*2;
    }
}


type AreaPeremeter = Area & Peremeter;

const rect = new Rectangle();

class Circle implements AreaPeremeter{
    radius:number = 5;

    area():number{
        return Math.PI * this.radius **2
    }

    perimeter(): number {
        return 2* this.radius *Math.PI;
    }
}

const circle = new Circle();



 // put the rect, and circle together;
 const objectsWithArea: Area[] = [rect, circle]

 objectsWithArea.forEach(item=>{
    console.log("The  area is:" ,item.area());
   
 })

 interface CustomerInfo{
    name:string;
 }

 class Customer implements CustomerInfo{


    name:string;
    constructor(name:string){
        this.name = name;
    }
 }


 interface Address{
    street:string,
    city:string
 }


 function printAddress(address:Address){
    console.log(`The address is ${address.city} ${address.street}`)

 }


 const addr = {
    street:"Gala Antonio",
    city:"New York"
 }

 printAddress(addr);