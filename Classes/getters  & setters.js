class Square{
    constructor(_width){
        this.width=_width;
        this.height=_width;
    }
    getArea(){
        return this.width*this.height;
    }

    get area(){
        return this.width*this.height
    }
    set area(newArea){
        this.width=Math.sqrt(newArea);
        this.height=Math.sqrt(newArea);
        
    }
}
const newSquare= new Square(10);
console.log(newSquare.getArea())//this is a function
console.log(newSquare.area);//100

newSquare.area=25; //set value
console.log(newSquare.area); //25
