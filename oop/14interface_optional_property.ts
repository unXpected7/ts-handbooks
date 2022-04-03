interface Teacher {
    name: string;
    age: number;
    phone?: string; //? optional property (allow undifined)
}

let teacher: Teacher = { name: "Joko", age: 23}; // optional use phone