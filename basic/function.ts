// tipedate 

let getName= ():string => {
    return "Hello, my name is wahyu";
}

console.log(getName())

let getAge = (): number => {
    return 23;
}

console.log(getAge());

//? function diatas wajib ada return
//? Void = tidak boleh ada return



let printName = (): void => {
    console.log("print name");
    // return "asd";
}

printName();

interface RootObject {
  person: Person;
  address: Address;
  pet: Pet[];
}

interface Pet {
  type: string;
  name: string;
  status: string;
  hobby?: string;
}

interface Address {
  city: string;
  state: string;
}

interface Person {
  name: string;
  age: number;
  hobby: string[];
}

//? ctrl + shift + alt + v for use ext json to ts 

//? argument type

function multipy(val1: number, val2: number): number {
  return val1 + val2;
}

const result = multipy(32, 5);
console.log(result);

//? function as type 

type Tambah = (val1: number, val2: number) => number; //? parameter dan return nya harus number

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}

//? default parameter/argument
const fullname = (first: string, last: string = "hanggawana"): string => {
  return first + "  " + last;
}
console.log(fullname("nusendra")); 
console.log(fullname("nusendra", "nasution")); //? parameter ke -2 ter-update 

//? Optional Paramater
const getUmur = (val3: string, val4?: string): string => { //? ?: utk optional , jika tdk diisi tdk error tp undefined
  return val3 + " " + val4;
}

console.log(getUmur("s", "c"));