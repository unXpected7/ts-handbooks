type Generics2<T> = T; //? type for declare variable

interface Generics3<T> { //? interface for object
    asdas: T
}

const genericFuncion2 = <T>(value: T): Generics2<T> => {
   return value;
}

console.log(genericFuncion2<string>('string'));



//? function native, not arrow function

function genericFuncion3<T>(value: T): Generics2<T>{
    return value;
}