interface Student {
    readonly name: string;
    readonly age: number;
}

let student1: Student = { name: "joko", age: 27}; //? immutable like const (cant replace)

//? readonly after assignment cant replace the properties(immutable)

// student.name = "anwar"; //? error 