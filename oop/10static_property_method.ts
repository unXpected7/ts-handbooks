class Chicken {
    static foot: number = 2;

    static walk() {
        console.log(`chicken walking used ${this.foot}`); //? not error cz same static
    }

    getFoot() {
        // console.log(this.kaki) //? this is property object // error cz propercty include in class
        console.log(Chicken.foot) //? this is property class
    }
}
console.log(Chicken.walk()); //? doesnt need declare cz property was include in class

const chicken2 = new Chicken();
chicken2.getFoot();

//? static is global statement where can assigment
const chicken3 = new Chicken();
const chicken4 = new Chicken();

console.log(chicken3.getFoot());
console.log(chicken4.getFoot());

Chicken.foot = 4; //? upadted , cz foot was includde in this class

console.log(chicken3.getFoot());
console.log(chicken4.getFoot());

