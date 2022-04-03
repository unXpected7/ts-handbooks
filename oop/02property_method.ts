class Animal2 {
    name: string = '';
    foot: number = 0;
    mamalia: boolean = false;

    breathing() {
        console.log(`${this.name} is breathing`);
    }
}

const animal2 = new Animal2();
console.log(animal2);

animal2.name = 'frog';
animal2.foot = 4;
console.log(animal2);

animal2.breathing();