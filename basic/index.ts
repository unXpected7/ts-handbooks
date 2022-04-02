let isMarried: boolean = true;

let age: number = 20;

//? let decimal: number = 6;
//? let hex: number = 0xf00d;  0x sbg identitas
//? let binary: number = 0b1010; 0b 
//? let octal: number = 0o744;

// error
// age = true;
// age = 'eko';

let nama: string = 'Eko Kurniawan';
nama = nama + ' Kennedy';

let hello: string = `Hello ${nama}`;

console.log(hello);

//? array

let names : string[] = ['eko', 'kurniawan', 'Khannedy'];
let numes : Array<number> = [1, 2, 3, 4];
 numes.push(1); //? untuk menambah array
delete numes[2]; //? untuk hapus index array ke - 1

 //? tuple , ngedifined typeadata dan jumlah array
let student : [string, string, number] = ["1000", "Eko", 100]

//? type data Enum d
enum Gender { Male = 1, Female = 2, Unknown = -3} 

let jenisKelamin : Gender = Gender.Male;

//? enum default nya number namun dapat diubah menjadi string
enum Category {
    Grocery =  "GROCERY",
    Electronic = "ELECTRONIC",
    Handphone = "HANDPHONE"
}

let kategory: Category = Category.Handphone;
console.log(kategory);
//? any, void, null, undefined, never

//! ./node_modules/.bin/tsc --init

// export type Props = {
//     item: any
//     cart: any
//     handleClick ?: () => void
//     ui ?: ErrorStore
//     intl ?: any
// }
//? over is meme of im writing typescript