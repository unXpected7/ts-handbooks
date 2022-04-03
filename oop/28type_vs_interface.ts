type name = string;

type UserType = {
    name: string;
}

interface UserInterface {
    name: string;
}

class User1 implements UserType {
    name: string = 'user 1';
}
class User2 implements UserInterface {
    name: string = 'user 2';
}


//? type can use object
//? interface just only use object

//? interface can merge 2 same name interface
interface Dino {
    name: string;
}

interface Dino {
    weight: number;
}

class Trex implements Dino {
    name: string;
    weight: number;
}

//? type cant merge 2 same name type
type Dino2 = {
    name: string;
}

// type Dino2 = {
//     weight: number;
// } //? Error cz same name

//? this is how to merge 2 same type

type Name = {
    name: string;
}

type Age = {
    age: number;
}

type Employee1 = Name & Age;
type Employee2 = Name | Age;

const employee: Employee1 = {
    name: 'asdasdas',
    age: 31
}

//? Interface can extends class
//? type cannot extends class

