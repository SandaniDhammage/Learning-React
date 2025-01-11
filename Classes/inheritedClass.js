class person{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
        console.log('A new person created');
    }
}
class programmer extends person{
    constructor(_name,_age,_language){
        supper(_name,_age)//call the parent class constructor
        this.name=_name;
        this.age=_age;
        this.language=_language;
    }
    code(){
        return  `${this.name} is a programmer &
        knows ${this.language}`;
    }

}

const john=new person('john',32); //a new person created
const jane=new programmer('jane','28','java');// a new person created
console.log(jane.code);