const Shape = require('./Shape.js')

class Triangle extends Shape{
    constructor(logoTxt, logoTxtColor, logoShapeColor) {
        super(logoTxt, logoTxtColor, logoShapeColor);
    }
    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points= "150,10 25,190 275,190" fill="${this.logoShapeColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTxtColor}">${this.logoTxt}</text>
</svg>`}
}

module.exports = Triangle;