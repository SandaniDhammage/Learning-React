const arr1=[1,2,3];
const arr2= [...arr1];
arr1[0]=18;
console.log(arr1,arr2); //output: [18,2,3] [1,2,3]


const obj1={one:10,two:20,three:30};
const obj2={...obj1};
obj1['one']=15;
console.log(obj1,obj2);
