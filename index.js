
const fs = require('fs');
const inquirer = require('inquirer'); 
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation instruction - indicate NONE if no instruction require'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage description'
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Enter contributor on this project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the tests?'
        },
        {
            type: 'input',
            name: 'question',
            message: 'Do you have any question?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select license',
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ]
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address'
        },
    ]);
}   

function generateMarkdown(response) {
    return `# ${response.title}
    

#   Table of Contents
~   [Description](#description)
~   [Installation](#installation)
~   [Usage](#usage)
~   [License](#license) 
~   [Contributor](#contributor)
~   [Tests](#test)
~   [Questions](#question)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
    ${response.description}

## Installation:
    ${response.installation}

## Usage:
    ${response.usage}

## License:
    For more information about the license, please click the link below:
    [License](https://opensource.org/licenses/${response.license})

## Contributor:
    ${response.contributor}

## Tests:
    ${response.test}

## Questions:
    If in doubt, please visit the following link:
    [GitHub Profile](https://github.com/${response.username})

    For additional questions please send an email at: ${response.email}
`;
}
    
// function to initialize program
 async function init() {
     try {
         const response = await promptUser();
         const readMe = generateMarkdown(response);
         
         await writeFileAsync("README.md", readMe);
         console.log("Success");
     } catch (err) {
         console.log(err);
     };
 };   

// function call to initialize program
init();
