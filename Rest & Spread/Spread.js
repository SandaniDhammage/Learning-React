const arr1=[1,2,3];
const arr2=['x','y','z'];

console.log(arr1,arr2);

function sum (a,b,c){
    console.log(a+b+c);
}
sum(arr1[0],arr1[1],arr2[2]); //arr1 values pass for the operation, but this is easy to do using spread
sum(...arr1); //output 6