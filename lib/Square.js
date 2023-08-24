//import parent class Shape

const Shape = require('./Shape.js')

//use inheritance through the extends and super keywords

class Square extends Shape {
    constructor(logoTxt, logoTxtColor, logoShapeColor) {
        super(logoTxt, logoTxtColor, logoShapeColor);
    }

    // string that is rendered into the logo.svg file. this string is unique for each type of class

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="30" height="30" fill="${this.logoShapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTxtColor}">${this.logoTxt}</text>
</svg>`}
}

//export Square class to be used in other files

module.exports = Square;