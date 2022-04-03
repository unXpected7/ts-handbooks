class Animal4a {
    name: string = '';
    foot: number = 0;

    breathing() {
        console.log('breath');
    }
}

class Bird4 extends Animal4a {
    color: string = 'red';
}

const bird4 = new Bird4();
bird4.breathing();
bird4.foot = 2;
bird4.color = 'green';

console.log(bird4);