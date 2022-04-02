//? Abstract Class yaitu class yang tdk bisa di instance langsung, melainkan harus instance class child nya

abstract class  Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("bruuumm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motor extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();