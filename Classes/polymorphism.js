class Animal{    //in polymorphism we can alter or edit functions in parent class
    constructor(){
        console.log("An animal is created");
    }
    makeSound(){
        console.log('Animals generally make sounds');

    }
}

class Dog extends Animal{
    constructor(){
        super();
        console.log('A dog is created');
    }
    makeSound(){
        console.log('Dogas normally bark');

    }
}

class Cat extends Animal{
    constructor(){
       super();
       console.log('A cat is created'); 
    }
    makeSound(){
        console.log('cat make meow');
    }
}

const someAnimals=new Animal;
someAnimals.makeSound; // An animal is created
                       //Animals generally make sounds

const tommy=new Dog;
tommy.makeSound();

const kitty=new Cat;
kitty.makeSound();