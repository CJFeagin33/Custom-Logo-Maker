class Circle {
    constructor(logoShape, logoShapeColor) {
        this.logoShape = logoShape;
        this.logoShapeColor = logoShapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`
    }
}

class Triangle {
    constructor(logoShape, logoShapeColor) {
        this.logoShape = logoShape;
        this.logoShapeColor = logoShapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`
    }
}

class Square {
    constructor(logoShape, logoShapeColor) {
        this.logoShape = logoShape;
        this.logoShapeColor = logoShapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;

