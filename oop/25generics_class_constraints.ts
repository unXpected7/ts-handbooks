interface Product {
    sell(): void;
}

class CarProduct implements Product {
    sell(): void {
        console.log('sell cars');
    }
}

class MotorProduct implements Product {
    sell(): void {
        console.log('selling motors');
    }
}

function sellProduct<T extends Product>(products: T[]): void {
    products.forEach(product => product.sell())
}

const car = new CarProduct();
const motor = new MotorProduct();

sellProduct([car, motor]);