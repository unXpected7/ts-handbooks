class User {
    private name: string;
    private username: string;
    private password: string;

    constuctor(name: string, username: string, password: string) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}

// const user1 = new User('John', 'john', '123');
// const user1 = new User('John', 'john', '123');
// const user1 = new User('John', 'john', '123');
// const user1 = new User('John', 'john', '123');
// const user1 = new User('John', 'john', '123');

// case: when class want update paramtere , we must change all all the code that use this class, or will it error