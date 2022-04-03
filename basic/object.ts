// object

type User = {
    name: string,
    age: number
}

let user: User = {
    name: "Nande",
    age: 32
};

user = {
    name: "Surabaya",
    age: 12
};


//? JSON to TS

// {
//     "person":{ "name":"ilyas", age:23, "hobby":["programming","watching anime"] },
//     "address":{ "city":"slawi", "state":"central java" },
//     "pet":[{ "type":"rabbit", "name":"chiko", "status":"died" }, { "type":"rubber duck", "name":"romeo", "status":"alive", "hobby":"debugging" }]
// }
//? copy that JSON 
//? then ctrl + shift + alt + v for use ext json to ts 

interface RootObject {
    person: Person;
    address: Address;
    pet: Pet[];
  }
  
  interface Pet {
    type: string;
    name: string;
    status: string;
    hobby?: string;
  }
  
  interface Address {
    city: string;
    state: string;
  }
  
  interface Person {
    name: string;
    age: number;
    hobby: string[];
  }
  