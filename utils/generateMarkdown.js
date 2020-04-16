const index = require('../index');

function generateMarkdown(data) {
  console.log(data);
  return `

![badge](https://img.shields.io/github/followers/${data.username}?style=social)

# ${data.projectTitle}

## Description
${data.projectDescription}

## Table of contents
1. Installation
2. Usage
3. License
4. Contributing
5. Tests

### Instalallation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributing
${data.contributing}

### Tests
${data.tests}

## Questions
[${data.email}](${data.email})
![logo](${data.avatar})
`;
}

module.exports = generateMarkdown;
