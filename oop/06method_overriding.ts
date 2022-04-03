///? method overriding used for change or replace in their parent class
class Animal6 {
    name: string = '';

    breathing() {
        console.log('breathing');
    }
}

class Frog6 extends Animal6 {
    breathing() {
        console.log('lit breathing');
    }

}

const frog6 = new Frog6();
frog6.breathing(); //? output is in child class