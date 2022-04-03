//? generic is dynamic type data

function getData(value: any){
    return value;
}

const data1 = getData("test");
console.log(data1);

//? wehen u use any as typedata, u cant detected the typedata (instances not appeared)
//? cannot use .length / cannot use .toLowerCase | when u choose any as string
//? cannot use .toLocaleStirng / cannot use .toString cannot use .fiix | when u choose any as number

//?=============================
function getData2<T>(value: T){
    return value;
}

const data2 = getData2<string>('test2');
console.log(data2.length) //? instance appeared cz use generic function
const data3 = getData2<number>(222);
console.log(data3.toFixed(3)); 

//? u can choose any type data as assigment after declare generic typedata 