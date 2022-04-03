interface Vehicle {
    name: string;
    wheels: number;
}
interface ICar extends Vehicle {
    doors: number;
}

class Avanza implements ICar{ 
    name: string = "Civic";
    wheels: number = 4;
    doors: number = 4;
}


//? interface can inheritances