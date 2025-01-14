function one2five(){
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

}
setTimeout(one2five,3000);   //(function, time) until you entered time, the function not excecuted in async
one2five();





console.log(6); //output: 6,7,8,9,10,1,2,3,4,5
console.log(7);
console.log(8);
console.log(9);
console.log(10);