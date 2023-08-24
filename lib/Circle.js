const Shape = require('./Shape.js')

class Circle extends Shape{
    constructor(logoTxt, logoTxtColor, logoShapeColor) {
        super(logoTxt, logoTxtColor, logoShapeColor);
    }
    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.logoShapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTxtColor}">${this.logoTxt}</text>
</svg>`}
}

module.exports = Circle;



