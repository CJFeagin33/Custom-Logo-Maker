const inquirer = require('inquirer');
const fs = require('fs');

function createLogo(data) {

}

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
        let logoGenerated = createLogo(data);

        // writes the file to the dist folder as a .md, using the readMeGenerated as its content.
        fs.writeFile('./examples/logo.svg', logoGenerated, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        )
    });