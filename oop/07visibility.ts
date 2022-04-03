//? public
//? protected = propercty still can access in their child a
//? private = property only can acces in their class

class Animal7 {
    public name: string;
    private foot: number;
    protected mamalia: boolean;

    constructor(name: string, foot: number, mamalia: boolean) {
        this.name = name;
        this.foot = foot;
        this.mamalia = mamalia;
    }

    walk() {

    } //?this method can access all property in this class
}

 class Frog7 extends Animal7 {
     private ageEggs: number = 4;
     private ageTadpoles: number = 7;
     private ageFrog: number = 90;

     getAges() {
         console.log(this.ageEggs + this.ageFrog + this.ageTadpoles);

     }//?  still can access cz private class
 }

 const frog7 = new Frog7 ('asd', 4, false);
 frog7.getAges(); //? only can access method, cannot access property(private)