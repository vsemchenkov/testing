// Open close principle

class Shape {
    area() {
        throw Error('Area method should be implements')
    }
}

class Cirle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }
    area() {
        return this.size ** 2;
    }
}

class AreaRender {
    constructor(areaCalc) {
        this.areaCalc = areaCalc;
    }

    render() {
        console.log(this.areaCalc);
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    areaSize () {
        return this.shapes.reduce((acc, item) => {
            acc += item.area();
            return acc;
        }, 0);
    }
}
const Area = new AreaCalculator([
    new Rect(10, 10),
    new Rect(10, 10)
]).areaSize();

console.log(Area);
