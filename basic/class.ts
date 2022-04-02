// export class User {
//     public name: string;
    
//     constuctor(name: string, public age2: number){
//         this.name = name; //? this. name dari public, =name dari parameter

//     }
// }

// let user = new User("cecep");
// console.log(user);

// //? cara ke -2 dibawah ini lebih simple
// export class User2 {
//     constructor(public name2: string){
        
//     }
// }


export class User {
    name: string;

    constructor(name: string, public age: number){
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = ():string => {
        return this.name;
    }
}
// //? macam class = public , private , protected
//? public = bisa di akses di semua class / dari luar class
//? protected = hanya bisa diakses dari class tersebut dan kelas turunanya
//? private = hanya bisa diakses dari class itu sendiri

//? Inheritance = class turunan

//? class Admin mewarisi method dari class user User

export class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = ""; //? tdk bisa diakses dari luar
    static getRoleName: string = "Admin"; //? tdk perlu masuk ke constuctor

    constructor(phone: string, name: string, age: number){
        super(name, age);
        this.phone = phone
    }

    static getNameRole() {
        return "hei";
    }

    getRole(): { read: boolean, write: boolean} {
        return  {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string){ //? set tdk mereturn apa2, tdk perlu :void | : any karena tdk dipergunakan utk mengambil data
       if(value.length < 5){
            this._email = "email is incorrect";
       } else {
           this.email = value    //? jika diberi return maka error

       }
    }

    get email(): string {
        return this._email;
    }
}

//? membuktikan class admin kalau punya property dan method User 

let admin = new Admin("54544","sopo", 22);
admin.age;
admin.getName();
admin.setName("siis");
admin.phone;

admin.email = 'admin@fsasfa.com';
console.log(admin.email)

//admin._email; //? error karena private
//? setter & getter
//? setter sbg validator
//? getter utk mengambil data pada class

//? Static Property & Static Method
//? tidak perlu new untuk menggunakan nya

let admin1 = Admin.getRoleName; //? dapat muncul predict alias instance
let admin2 = Admin.getNameRole;

