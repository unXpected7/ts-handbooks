// singleton pattern is used to create only one instance of a class
// and provide global access to it.(global variable)
// good for memory optimization

class Me {
    private firstName: string = '';
    private lastName: string = '';

    getFullName(): string {
        // access db , select user
        this.firstName = 'John';
        this.lastName = 'Doe';

        return `${this.firstName} ${this.lastName}`;
    }
}

const fullname = new Me();
console.log(fullname.getFullName());