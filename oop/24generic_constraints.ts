function generic23<T>(arg: T): T {
    // console.log(arg.length) //? cant access lenth cz typedata not defined
    return arg;
}

interface Length {
    length: number;
}

function generic24<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const generic24a = generic24('asdasd');
console.log(generic24a);

// const generic24b = generic24(123123); //? error
const generic24b = generic24({ length: 10, value: 200});
