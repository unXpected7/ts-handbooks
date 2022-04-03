class Store {
    private name: string = "Store A";
    private profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class fashionProduct{
    private store: Store;
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell(): void {
        console.log(`${this.name}  Selling Price is ${this.store.getProfit() + this.price}`);

    }
}

const cloth = new fashionProduct("Long Sleeves", 5000);
cloth.sell();

//! ---------------------------------------

interface IStore {
    name: string;
    profit: number;
    getProfit(): number;
}

class StoreOld implements IStore{
    name: string = "Store Old";
    profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}
class StoreNew implements IStore{
    name: string = "Store New";
    profit: number = 2500;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class ShoesProduct{
    private store: IStore;
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = store;
    }

    sell(): void {
        console.log(`${this.name}  Selling Price is ${this.store.getProfit() + this.price}`);

    }
}

class FoodProduct{
    private store: IStore;
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = store;
    }

    sell(): void {
        console.log(`${this.name}  Selling Price is ${this.store.getProfit() + this.price}`);

    }
}

const storeold = new StoreOld();
const storenew = new StoreNew();

const sneaker = new ShoesProduct(storenew, "great Sneaker", 80000 ); //? change store just from this
const boots = new ShoesProduct(storeold, "Vintage Shoes", 90000);

console.log(sneaker);
console.log(boots);

sneaker.sell();
boots.sell();