namespace FactorySolution {
    interface Logistic {
        qty: number;
        deliver(): void;
    }

    class Truck implements Logistic {
        qty: number;

        constructor(qty: number) {
            this.qty = qty;
        }

        deliver(): void {
            console.log('kirim ${this.qty} truck');
        }
    }

    class Ship implements Logistic {
        qty: number;

        constructor(qty: number) {
            this.qty = qty;
        }

        deliver(): void {
            console.log('kirim ${this.qty} ship');
        }
    }
    

    type LogisticType = {
        type: string;
        qty: number;
    }

    interface Factory {
        create(options: LogisticType): Logistic;
    }

    class LogiscticFactory implements Factory {
        public create(options: LogisticType): Logistic {
            if(options.type === 'deliver_by_land') {
                return new Truck(options.qty);
            } else if (options.type === 'deliver_by_sea') {
                return new Ship(options.qty);
            }

            throw new Error('Unknown type');
        }
    }

    const factory = new LogiscticFactory();

    const deliverByLand = factory.create({
        type: 'deliver_by_land',
        qty: 10
    });

    deliverByLand.deliver();

    const deliverBySea = factory.create({
        type: 'deliver_by_sea',
        qty: 10
    });

    deliverBySea.deliver();

}
