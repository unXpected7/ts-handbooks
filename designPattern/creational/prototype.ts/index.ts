namespace PrototypePattern {
    class User {
        public name: string;
        public username: string;
        public password: string;
    
        constuctor(name: string, username: string, password: string) {
            this.name = name;
            this.username = username;
            this.password = password;
        }

        public clone(): this {
            const clone = Object.assign({}, this);
            return clone;
        }
    }

//     const user1 = new User('John', 'john', '123');
//     const user2 = user1.clone();

//     user2.name = 'John2';
//     console.log(user1);
//     console.log(user2);
}