const arr1=[1,2,3,4,5];
const[first,second,...rest_arguments]=arr1
console.log(first);// 1
console.log (second);// 2
console.log (rest_arguments);// [3,4,5]

const obj1={one:10,two:20,three:30,four:40};
const{one,two,...rest_obj}=obj1

console.log (one);
console.log (two);
console.log (rest_obj);
