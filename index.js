// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "Enter your github username",
      name: "Github",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your email",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter the title of your project",
      name: "title",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
      validate: validateInput,
    },
    {
      type: "list",
      message: "Select your licenses",
      choices: ["None", "MIT", "Apache", "MPL", "GPL", "AGPL"],
      name: "license",
    },
    {
      type: "input",
      message: "How can someone use your project?",
      name: "usage",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Add a screenshot?",
      name: "screenshot",
    },
    {
      type: "input",
      message: "What commands should be run to install dependencies?",
      name: "install",
      validate: validateInput,
    },
    {
      type: "input",
      message: "What commands should be run to run tests?",
      name: "tests",
      validate: validateInput,
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to this repo?",
      name: "contribute",
      validate: validateInput,
    },
  ];

//inquirer questions function

function inquire() {
    return inquirer.prompt(questions);
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
      error ? console.log("Error. Information not logged: " + error) : console.log("README generated");
    });
  }

  //generates and stores README file in the README directory

  async function init() {
    const responses = await inquire();
    const markdown = generateMarkdown(responses);
    writeToFile("./README", markdown);
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
