// install npm packages already in package.json
    // fs to create the md file
    // anxios for the API request
    // inquirer to prompt the use the questions
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require('./utils/api');

 // prompt questions about the project
    // project title
    // description
    // table of Contents
    // Installation
    // Usage
    // License
    // Contributing
    // Tests
const questions = [
    {
        type: "input",
        message: "Enter your github username",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the project title",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide a license",
        name: "license"
    },
    {
        type: "input",
        message: "Provide guidelines for other developers to contribute",
        name: "contributing"
    },
    {
        type: "input",
        message: "Write tests for you application, provide examples on how to run them",
        name: "tests"
    }
];

async function init() {
    var answers = await inquirer
    .prompt(questions);
    // prompt username question
        // make the call to the Github API to retrieve profile image

    api.getUser(answers.username)
    .then(function(response){
        var response = response.data;
        var userData = {
            email: answers.email,
            username: answers.username,
        // Display user name Github profile picture
            avatar: response.avatar_url,
            projectTitle: answers.projectTitle,
            projectDescription: answers.projectDescription,
            installation: answers.installation,
            usage: answers.usage,
            license: answers.license,
            contributing: answers.contributing,
            tests: answers.tests        
        }

        var readMeContent = generateMarkdown(userData);

        fs.writeFile("./output/readme.md", readMeContent, function(err){
            if(err) {
                return console.log (err);
            }
        })
    });
}

init();
