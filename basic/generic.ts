function getData1(value: any) {
    return value;
}

console.log(getData1("Nusembra").length);
console.log(getData1(222).length); //? tdk muncul error, solusi = gunakan generic

//? Generic
function myData<T>(value: T) {
    return value
}

console.log(myData("Nassd").length);
// console.log(myData(22).length); //? akan muncul error

const arrowFunc = <T extends unknown>(value: T) => { //? untuk JSX
    
}
const arrowFunc1 = <T extends {}>(value: T) => {

}
const arrowFunc2 = <T, >(value: T) => {

}
