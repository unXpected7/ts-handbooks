export default interface ILaptop<T> {
    name: string;
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
}

//? Interface likes Blueprint where must consume that component
//? seperti aturan baku