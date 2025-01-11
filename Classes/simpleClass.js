class Rectangle{
    constructor(_width,_height,_color){
        this.width=_width;
        this.height=_height;
        this.color=_color;
        console.log('A new Rectangle Created');

    }

    getArea(){
        return this.width*this.height;
    }

    
}

const newRectangle= new Rectangle(10,8,"red");
console.log(newRectangle.getArea())