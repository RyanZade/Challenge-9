// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'Enter the Title of the project:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter your GITHUB username: ',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter the Description of the project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter the installation instructions:',
            name: 'installationInstructions',
        },
        {
            type: 'input',
            message: 'Enter the Usage information: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter the Contribution Guidelines: ',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter the test instructions: ',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose your license from the list below: ',
            name: 'license',
            choices: ['apache', 'BSD', 'Eclipse']
        },
    //questions and answers
];

// TODO: Create a function to write README file
function createREADME() {
    inquirer.prompt(questions).then(function(answer){
        let readMeString = generateMarkdown(answer);
        fs.writeFileSync('README.md', readMeString, function(err){
            if (err) console.log(err);
            else
            console.log("README created successfuly");
        })
    })
};

// TODO: Create a function to initialize app
function init() {
    createREADME();
    //calling generateMarkdown functuion from the js with the answers from questions and readme string genereated
}

// Function call to initialize app
init();
