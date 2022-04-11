namespace Builder {

    //? the first way
    class User {
        public name: string = '';
        public username: string = '';
        public password: string = '';
    
        constuctor(name: string, username: string, password: string) {
            this.name = name;
            this.username = username;
            this.password = password;
        }

        getDetails() {
            return `${this.name} username = ${this.username}`;
        }
    }

    class UserBuilder {
        private user: User;

        constructor() {
            this.user = new User();
        }

        setName(value:string) {
            this.user.name = value;
            return this;
        }

        setUsername(value:string) {
            this.user.username = value;
            return this;
        }

        setPassword(value:string) {
            this.user.password = value;
            return this;
        }

        build() {
            return this.user;
        }
    }
    const user1 = new UserBuilder()
        .setName('John')
        .setUsername('john123')
        .setPassword('john123')
        .build();
        
    console.log(user1)

    // the second way 
    class User2 {
        public name: string;
        public username: string;
        public password: string;
    
        constuctor({name = '', username = '', password = '' } = {}) {
            this.name = name;
            this.username = username;
            this.password = password;
        }

        getDetails() {
            return `${this.name} username = ${this.username}`;
        }
    }
    // const user2 = new User2({name: 'John', username: 'john123', password: 'john123'});

}