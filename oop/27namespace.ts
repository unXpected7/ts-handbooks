//? namespace = is like private object not exposed to public
//? used for to avoid error reason the same property,class, method in public

namespace NamespaceExample {
    export class Animal {

    }
    export const frog = new Animal();
}

//? how to acccess content in namespace
const grasshopper = new NamespaceExample.Animal();
let frog2a = NamespaceExample.frog;