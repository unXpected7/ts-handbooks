//? Interfaces is like bluprint or contract who must used 

interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

class Samsung implements AndroidPhone { //? used Interfaces for Blueprint / template
    name: string;
    constructor(name: string){
        this.name = name;
    }
    menu(): void {
        console.log('menu tapped')
    }
    home(): void {
        console.log('home tapped');
    }
    back(): void {
        console.log('back tapped')
    }
}

class Asus implements AndroidPhone {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    menu(): void {
        console.log('menu tapped')
    }
    home(): void {
        console.log('home tapped');
    }
    back(): void {
        console.log('back tapped')
    }
}

class GameA { //? use Interface just for property
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
        this.phone = phone;
    }

    back() {
        console.log('back to menu'); //? method for class Game
    }

    menu() {
        this.phone.menu(); //? acces method to native (this paremt)
    }

    home() {
        this.phone.home(); //? its like you open game and tapped home from Your phone( native method)
    }
}

const samsung = new Samsung("Galaxy");

const game = new GameA(samsung);//? not error cz samsung is Android Phone
game.back();
game.home();
game.menu();


// ----------------------------------------//
interface ApplePhone {
    home(): void;
}

class IPhone implements ApplePhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    home(): void {
        console.log('Global Menu');
    }
}

const iphone = new IPhone('IPhone SE');
// const game2 = new GameA(iphone) //? error cz game just for Andriod phone