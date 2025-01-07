const arr1=[1,2,3,4,5,6];

function sum(...args){ //get all the arguments have
   let sum=0;
   for(const arg of args){
    sum=sum+arg;

   }
   console.log(sum);
}

