/* eslint-disable */
import { strict as assert } from "assert";

type Link={
    title:string,
    url:string
}

const microsoft ={
    title:"microsoft",
    url:"https://www.microsoft.com"
}


const typescript ={
    title:"typescript",
    url:"https://www.typescript.com"
}


const links: Link[] = [microsoft, typescript]

const tsurl = links[1].title

links[0].title = "Microsoft"

links.forEach(item=>{
    console.log(item);
})
