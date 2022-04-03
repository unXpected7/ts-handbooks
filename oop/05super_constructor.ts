class Animal5 {
    name: string;
    foot: number;

    constructor(name: string, foot: number) {
        this.name = name;
        this.foot = foot;
    }
}

class Frog5 extends Animal5 {
    poison: boolean;

    constructor(name: string, foot: number, poison: boolean){ //? add constructor parent
        super(name, foot); //? super = run constuctor parent 
        this.poison = poison;
    }
}

const frog5 = new Frog5('frog', 4, true);
console.log(frog5);