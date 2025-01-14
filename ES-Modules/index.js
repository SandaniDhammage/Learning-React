//const extra=require('./extra.js'); //reqire run in backend

//console.log(extra.test); rr

import { test,hello } from "./extra.js";
import {readFile} from "fs/promises";
console.log(test);

console.log("test log from index.js");

async function textfile() {
    var date = await readFile('./expample.txt','utf8');
    console.log(date);
    
}
textfile();