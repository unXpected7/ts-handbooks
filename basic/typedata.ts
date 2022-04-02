//? string
let names1: string = "nandemonai";
names1 = "string";

//? number
let umur: number;
umur = 30
umur = 21;

//? boolean
let isMarried1: boolean;
isMarried1: true;
isMarried1: false;

//? any
let heroes: any = "Iron Man";
heroes = 20;
heroes = [];
heroes = {};
heroes = true || false || "string";

//union type //? mempunyai lebih dari satu type data
let phone: number | string;
phone = 6232131231;
phone = "083214233" //? menggunakan string agar 0 tidak ikut terhapus
