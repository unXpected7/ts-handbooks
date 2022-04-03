class Animal2 {
    name: string;

    constructor(name: string){
        this.name =name;
    }
}

interface IShark extends Animal {
    swim(): void;
}

class Whales implements IShark {
    name: string;

    constructor(name: string){
        this.name =name;
    }
    swim(): void{
        console.log('swimming');
    }

}
//? Class implements interface
//? interface can extends interface
//? interface can extends class
///? but interface cant implements class , cz interface is parent(native)