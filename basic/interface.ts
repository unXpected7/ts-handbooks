interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log('Nyala');
    }
    off(): void {
        console.log('mati');

    }
}



class Macbook implements Laptop {
    name: string;
    keyboardLigth: boolean;

    constructor(name: string, keyboardLigth: boolean){
        this.name = name;
        this.keyboardLigth = keyboardLigth;
    }
    on(): void {
        console.log('Nyala');
    }
    off(): void {
        console.log('mati');

    }
    
}

let asus = new Asus("asus", true);
console.log(asus.on());
console.log(asus.off());