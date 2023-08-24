const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter the text for your logo. Please only use at most 3 characters.",
            name: 'logoTxt',
        },
        {
            type: 'input',
            message: "Please enter your desired text color. This can be a color's name or a hexadecimal.",
            name: 'logoTxtColor',
        },
        {
            type: 'list',
            message: "Which shape would you like your logo to be?",
            name: 'logoShape',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: "Please enter your desired logoShape Color. This can be a color's name or a hexadecimal.",
            name: 'logoShapeColor',
        },
    ]).then(data => {
        if (data.logoShape === 'Circle') {
            logoGenerated = new Circle(data.logoTxt, data.logoTxtColor, data.logoShapeColor).render();
        } else if (data.logoShape === 'Triangle') {
            logoGenerated = new Triangle(data.logoTxt, data.logoTxtColor, data.logoShapeColor).render();
        } else if (data.logoShape === 'Square') {
            logoGenerated = new Square(data.logoTxt, data.logoTxtColor, data.logoShapeColor).render();
        }

        // writes the file to the dist folder as a .md, using the readMeGenerated as its content.
        fs.writeFile('./examples/logo.svg', logoGenerated, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        )
    });