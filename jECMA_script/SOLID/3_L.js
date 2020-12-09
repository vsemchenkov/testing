// Liskov substitution principle

class Person {
    constructor() {
    }
    access() {
        throw new Error('Should be implemented');
    }
}

class Member extends Person {
    constructor() {
        super();
    }
    access() {
        console.log('can be write code');
    }
}

class Guest extends Person {
    constructor() {
        super();
    }
    access() {
        console.log(`can't write code`);
    }

}

class Frontend extends Member {
    constructor() {
        super()
    }
    writeCode() {
        console.log('him write code');
    }
}

class Backend extends Member {
    constructor() {
        super();
    }
    writeCode() {
        console.log('him write code');
    }
}

class Databaser extends Guest {
    constructor() {
        super();
    }
    writeCode() {
        this.access();
    }
}

let writeCode = function (member) {
    member.access();
}

writeCode(new Frontend());
writeCode(new Backend());
writeCode(new Guest())