// array of questions for user
const fs = require('fs');
const inquirer = require('inquirer'); 
const format = require('./utils/generateMarkdown');

const question = [
        {
            type: 'input',
            name: 'user',
            message: 'Enter user name.'
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Enter repository name.'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title',
            default: 'My App'
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Enter project description',
            default: 'CLI Application'
        },
        {
            type: 'input',
            name: 'tc',
            message: 'Table of Content'
        },
        {
            type: 'input',
            name: 'inst',
            message: 'Installation instruction',
            default: 'author: ${data.email}'
        },
        {
            type: 'input',
            name: 'use',
            message: 'Usage description'
        },
        {
            type: 'input',
            name: 'license',
            message: 'unlicense'
        },
        {
            type: 'input',
            name: 'con',
            message: 'Enter contributors'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the tests?'
        },
        {
            type: 'input',
            name: 'qs',
            message: 'Do you have any question?'
        }
    ];
// function to initialize program
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) throw err
            console.log("Welcome!");
        });
    };

    function init() {
        inquirer.prompt(question).then((input, list => {
            writeToFile('README.md', format(input, list));
        }));
    };
    

// function call to initialize program
init();
