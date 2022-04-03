class ClassA {
    name: string = 'Class A';
}

class ClassB<T> {
    classProp: T;

    constructor(classProp: T) {
        this.classProp = classProp;
    }
}

const classA = new ClassA();
const classB = new ClassB(classA);