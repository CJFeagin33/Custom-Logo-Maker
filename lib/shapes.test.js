const Circle = require('./Circle');
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');

//test for Circle class

describe('Circle', () => (
    it('Circle should return a cicular logo with the correct color for both the shape and the text.', () =>{
        const logoCircle = new Circle("SVG", "Blue", "Red")
        expect(logoCircle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="Red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="Blue">SVG</text>
</svg>`)
    })

))

//test for Triangle class

describe('Triangle', () => (
    it('Triangle should return a triangular logo with the correct color for both the shape and the text.', () =>{
        const logoCircle = new Triangle("SVG", "Blue", "Red")
        expect(logoCircle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points= "150,10 25,190 275,190" fill="Red"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="Blue">SVG</text>
</svg>`)
    })

))

//test for Square class

describe('Square', () => (
    it('Square should return a square logo with the correct color for both the shape and the text.', () =>{
        const logoCircle = new Square("SVG", "Blue", "Red")
        expect(logoCircle.render()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="30" height="30" fill="Red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="Blue">SVG</text>
</svg>`)
    })

))

