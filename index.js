const fs = require("fs");
const inquirer = require("inquirer");

function application() {

  function typeOfEmployee() {
    return inquirer
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
    // if (listOfEmployees = undefined) {
    //   listOfEmployees = [];
    // }
    listOfEmployees = ( typeof listOfEmployees != 'undefined' && listOfEmployees instanceof Array ) ? listOfEmployees : [];
    
    listOfEmployees.push(data.typeOfUser);
    if (data.typeOfUser === "Engineer") {
      promptEngineer(data, listOfEmployees);
    } else if (data.typeOfUser === "Intern") {
      promptIntern(data, listOfEmployees);
    } else if (data.typeOfUser === "Manager") {
      promptManager(data, listOfEmployees);
    }
  }

  function promptEngineer(data, listOfEmployees) {
    console.log("You've chosen Engineer!");
    addAnother().then(result => {
      if(result.confirmAddEmployee) {
        typeOfEmployee();
      } else {
        generatePage(listOfEmployees);
      };
    });
  }

  function promptIntern(data) {
    console.log("You've chosen Intern!");
    addAnother().then(result => {
      if(result.confirmAddEmployee) {
        typeOfEmployee();
      } else {
        generatePage(data);
      };
    });
  }

  function promptManager() {
    console.log("You've chosen Manager!");
    addAnother().then(result => {
      if(result.confirmAddEmployee) {
        typeOfEmployee();
      } else {
        generatePage(data);
      };
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

  function generatePage (data) {
    console.log('Webpage generated!');
    console.log(data);
  }

  typeOfEmployee();
}

application();

// function addEmployee(listOfEmployees) {
//   if (!listOfEmployees.people) {
//     listOfEmployees.people = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "typeOfEmployee",
//         message: "What type of employee would you like to add?",
//         choices: ["Engineer", "Intern", "Manager"],
//       },
//       // put ask for info in between these two questions
//       {
//         type: "confirm",
//         name: "confirmAddEmployee",
//         message: "Would you like to enter another Employee?",
//         default: false,
//       },
//     ])
//     .then((answers) => {
//       listOfEmployees.people.push(answers);
//       if (answers.confirmAddEmployee) {
//         return addEmployee(listOfEmployees);
//       } else {
//         return listOfEmployees;
//       }
//     });
// }

// askForEmployee()
//   .then(addEmployee)
//   .then((answers) => {
//     console.log(answers);
//   });

//module.exports = { addEmployee };
