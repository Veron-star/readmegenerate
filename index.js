// array of questions for user
const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js')

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeToFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}

// function to initialize program
const init = async _ => {
    let rmObject = {}
    do {
        const {rmUser, rmRepo} = await prompt([
        {
            type: 'input',
            name: 'rmUser',
            message: 'Enter user name.'
        },
        {
            type: 'input',
            name: 'rmRepo',
            message: 'Enter repository name.'
        }
        ])
        rmObject = await
    }
}

// function call to initialize program
init();
