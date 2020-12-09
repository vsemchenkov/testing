// Interface segregation principle
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
class Whale extends Animal {
    constructor(name) {
        super(name);
    }
}

class Egle extends Animal {
    constructor(name) {
        super(name);
    }
}

const flier = {
    fly: function () {
        console.log('can fly');;
}};
const walker = {
    walk: function () {
        console.log('can walk');;
    }
};
const swimmer = {
    swim: function () {
        console.log('can swim');;
    }
};

const dog = new Dog('Rex');
const egle = new Egle('Orel');
const whale = new Whale('White');

Object.assign(dog, walker, swimmer);

dog.walk();
dog.swim();
