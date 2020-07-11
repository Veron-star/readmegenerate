function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.desc}

## Table of Contents
i.  [Installation](#Installation)
ii. [Usage](#Usage)
iii.[License](#License) 
iv. [Contributor](#Contributor)
v.  [Tests](#Tests)
vi. [Questions](#Questions)

## Installation
${data.inst}

## Usage
${data.use}

## License
${data.license}

## Contributor
${data.con}

## Tests
${data.test}

## Questions
${data.qs}

Email: ${data.email}
GitHub Profile: http://github.com/${data.githubName}
  `;
  }
  
  module.exports = generateMarkdown;