class Truck {
    private qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log('kirim ${this.qty} truck');
    }
}
class Ship {
    private qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log('kirim ${this.qty} ship');
    }
}
let type = 'deliver_by_land';
if(type === 'deliver_by_land') {
    new Truck(10).deliver();
} else if (type === 'deliver_by_sea') {
    new Ship(10).deliver();
}
