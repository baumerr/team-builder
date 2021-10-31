const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
      }
  ]).then((answers) => {
      const employee = new Employee(answers);
      console.log('Hello ' + employee.name + '!');
  })