//? abstract class cannot instances by client
//? can used for template for client who can call instances (method/property)

abstract class Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} is eating`);
    }

    abstract move(): void; //? abstact like interface
}

class Cat1 extends Animal1 {
    constructor() {
        super("cat");
    }

    move(): void {
        console.log("cat moving")
    }
}
class Bird11 extends Animal1 {
    constructor() {
        super("bird");
    }

    move(): void {
        console.log("bird flying")
    }
}

const cat1 = new Cat1();
cat12.move();

const bird1 = new Bird11();
bird12.move();