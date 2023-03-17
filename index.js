const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdownretrieve = require("./utils/generateMarkdown");


const validation = (input) => {
    
  if(input != null){

    return true
  }

  else{

    return "please give a valid response"

  }
}


// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: validation
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this project?",
    validate: validation,
  },

  {
    type: "input",
    name: "description",
    message: "Describe your project in detail",
    validate: validation,
  },

  {
    type: "input",
    name: "installation",
    message: "How to install the project?",
    validate: validation,
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the project?",
    validate: validation,
  },
  {
    type: "list",
    name: "license",
    message: "What license do you use?",
    choices: [
      {
        name: "MIT License",
        value: "MIT",
      },
      {
        name: "Apache License 2.0",
        value: "Apache-2.0",
      },
      {
        name: "GPL 3.0 License",
        value: "GPL-3.0",
      },
      {
        name: "No License",
        value: "None",
      },
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: validation,
  },
  
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: validation,
  },
];
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("success!!!")
    );
  }


  function renderLicenseBadge(license) {
    let badgeURL = '';
  
    switch (license) {
      case 'MIT':
        badgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        break;
      case 'Apache 2.0':
        badgeURL = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
        break;
      case 'GPL 3.0':
        badgeURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
        break;
      default:
        return '';
    }
  
    return `[![License](${badgeURL})](https://opensource.org/licenses/${license})\n\n`;
  }


  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  *[Installation](#Installation)\n
  *[Description](#Description)\n
  *[Usage](#Usage)\n
  *[Contributors](#Contributors)\n
  *[Tests](#Tests)\n
  *[Questions](#Questions')

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${data.license}
  
  ## Contributing
  
  ${data.contributors}
  
  ## Questions
  
  If you have any questions Email me at ${data.email} and if you want to see more of my work visit [${data.github}](https://github.com/${data.github})
  `;
  }
  
  
  // function to initialize program
  (function init () {
    inquirer.prompt(questions).then((responses) => {
      console.log(responses);
      const markdown = generateMarkdown(responses);
      writeToFile("README.md", markdown, (err) =>
        err ? console.log(err) : console.log("made it")
      );
    });
  })()

  
