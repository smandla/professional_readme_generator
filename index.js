// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  { name: "username", message: "What is your GitHub username?" },
  { name: "email", message: "What is your email address?" },
  { name: "projectName", message: "What is your project's name?" },
  {
    name: "description",
    message: "Please right a short description of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    name: "usage",
    message: "What does the user need to know about the using the repo?",
  },
  {
    name: "contributions",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Answer", answers);
  });
}

// Function call to initialize app
init();
