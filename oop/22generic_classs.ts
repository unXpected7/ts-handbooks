interface Generics4<T> {
    propA: T,
    methodA(): T
};

class GenericClass<T> implements Generics4<T> {
    propA: T;

    constructor(prop: T) {
        this.propA = prop
    }

    methodA(): T {
        return this.propA;
    }
}

const genericClassA = new GenericClass<number>(23);

console.log(genericClassA.methodA());