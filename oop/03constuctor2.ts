class Animal3 {
    name: string;
    foot: number;

    constructor(name: string, foot: number) {
        this.name = name;
        //? this.nama = property, nama; = parameter
        this.foot = foot;
    }
}

const bird = new Animal3('bird', 2);
console.log(bird);

// method ke -2 makes property in paramter

class Animal4 {
    constructor(public name: string, public foot: number){}
}
const bird2 = new Animal4('bird', 2);
console.log(bird);