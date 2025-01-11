class square{
    constructor(_width){
        this.width=_width;
        this.height=_width;

    }

    getArea(){
        return this.width*this.height;
    }

    static calArea(a,b){ //when you are using static method don't need to make object to call. u can directly call the function

        return a * b;
    }
}

const squre1 =new square(10);
console.log(squre1.getArea());
console.log(square.calArea(5,6));
