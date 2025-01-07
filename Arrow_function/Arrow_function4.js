this.name="Hasini";
//console.log (this.name)

const obj1={
    name:'Tharushi',
    normalfunction:function(){
        console.log(this.name); //i this function, get the nearest object name
    },
    arrowfunction:()=>{
        console.log (this.name); //arrow function get the outside object name of his scope
    }

}
//console.log (this.name)
obj1.normalfunction(); 
obj1.arrowfunction();
//output : Tharushi, Hasini
