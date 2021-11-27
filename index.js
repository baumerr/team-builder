const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');

const listOfEmployees = [];

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, (err) => {
        if(err) {
          reject(err);
          return;
        }
        resolve({
          okay: true,
          message: 'File Created!',
        });
      });
    });
};

function application() {
  function typeOfEmployee(employees) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "typeOfUser",
          message: "What type of employee would you like to add?",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
      .then((answer) => {
        askForInfo(answer);
      });
  }

  function askForInfo(data) {

    if (data.typeOfUser === "Engineer") {
      promptEngineer();
    } else if (data.typeOfUser === "Intern") {
      promptIntern();
    } else if (data.typeOfUser === "Manager") {
      promptManager();
    }
  }

  //name, id, email
  function promptEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this Engineer's Name?",
        },
        {
          type: "number",
          name: "id",
          message: "What is this Engineer's ID?",
        },
        {
          type: "input",
          name: "email",

          message: "What is this Engineer's email?",
        },
      ])
      .then((data) => {

        engData = {
          name: data.name,
          id: data.id,
          email: data.email,
        };
    const engineer = new Engineer(engData);

        listOfEmployees.push(engineer);
        addAnother().then((result) => {
          if (result.confirmAddEmployee) {
            typeOfEmployee(data);
          } else {
            createWebPage(listOfEmployees);
          }
        });
      });
  }

  function promptIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this Intern's Name?",
        },
        {
          type: "number",
          name: "id",
          message: "What is this Intern's ID?",
        },
        {
          type: "input",
          name: "email",

          message: "What is this Intern's email?",
        },
      ])
      .then((data) => {

        intData = {
          name: data.name,
          id: data.id,
          email: data.email,
        };
    const intern = new Intern(intData);

        listOfEmployees.push(intern);
        addAnother().then((result) => {
          if (result.confirmAddEmployee) {
            typeOfEmployee(data);
          } else {
            createWebPage(listOfEmployees);
          }
        });
      });
  }

  function promptManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this Manager's Name?",
        },
        {
          type: "number",
          name: "id",
          message: "What is this Manager's ID?",
        },
        {
          type: "input",
          name: "email",

          message: "What is this Manager's email?",
        },
      ])
      .then((data) => {

        manData = {
          name: data.name,
          id: data.id,
          email: data.email,
        };
    const manager = new Manager(manData);

        listOfEmployees.push(manager);
        addAnother().then((result) => {
          if (result.confirmAddEmployee) {
            typeOfEmployee(data);
          } else {
            createWebPage(listOfEmployees);
          }
        });
      });
  }

  function addAnother() {
    return inquirer.prompt([
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another Employee?",
        default: false,
      },
    ]);
  }

  function createWebPage(data) {
    console.log('0', data);

    const htmlData = generatePage(data);

    writeFile(htmlData);

  }

  typeOfEmployee();
}

application();