// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// console.log(inquirer);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// Needs to open up some kind of menu to help start writing the readMe
function init() {
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the title of you project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please provide a description of what you project is and a reason for its creation.',
                name: 'description'
            },
            {
                type: 'input',
                message: 'How did you install you dependencies?',
                name: 'installation',
                default: 'npm i'
            },
            {
                type: 'input',
                message: 'What does the user need to know about using this project?',
                name: 'usage'
            },
            {
                type: 'list',
                message: 'Which license should your project have?',
                name: 'license',
                choices: [
                    {
                        name: 'Apache License 2.0',
                        value: 'apache'
                    },
                    {
                        name: 'GNU General Public License v3.0',
                        value: 'gnu'
                    },
                    {
                        name: 'MIT License',
                        value: 'mit'
                    },
                    {
                        name: 'Mozilla Public License 2.0',
                        value: 'mozilla'
                    },
                    {
                        name: 'Eclipse Public License 2.0',
                        value: 'eclipse'
                    },
                    {
                        name: 'None',
                        value: 'none'
                    }
                ]
            },
            {
                type: 'input',
                message: 'How can the user contribute to this project?',
                name: 'contribution'
            },
            {
                type: 'input',
                message: 'What is the command for running a test?',
                name: 'test',
                default: 'npm run test'
            },
            {
                type: 'input',
                message: 'Enter your Github username.',
                name: 'githubUserName'
            },
            {
                type: 'input',
                message: 'Enter your email address.',
                name: 'email'
            },
        ])
}

// Function call to initialize app
init();
