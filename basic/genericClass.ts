class List<T> {
    private data: T[];

    constructor(...elements: T[]){
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[]{
        return this.data
    }
}

let numbers = new List<number>(1, 2, 3);
numbers.add(6);
numbers.addMultiple(22,2, 2);
console.log(numbers.getAll())

let random = new List<number | string> (22, "asda", 2);
random.add("asdasd");
console.log(random.getAll())
