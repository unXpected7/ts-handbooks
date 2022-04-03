interface Generics<T> {
    propA: T
}

const genericFuncion = <T>(value: T): Generics<T> => {
    let data: Generics<T> = {
        propA: value
    }
    return data;
}

console.log(genericFuncion<string>('sadsda'));
console.log(genericFuncion<number>(16)); //? dynamic prop