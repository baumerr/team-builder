const fs = require("fs");
const inquirer = require("inquirer");
const { promptEngineer, promptIntern, promptManager } = require("./src/ask");

inquirer
  .prompt([
    {
      type: "list",
      name: "typeOfEmployee",
      message: "What type of Employee would you like to add?",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ])
  .then((answers) => {
    console.log(answers.typeOfEmployee);
    if (answers.typeOfEmployee === "Engineer") {
      promptEngineer();
    } else if (answers.typeOfEmployee === "Intern") {
      promptIntern();
    } else if (answers.typeOfEmployee === "Manager") {
      promptManager();
    }
  });
