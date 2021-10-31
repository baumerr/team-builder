const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function promptEngineer () {
    console.log("You've chosen Engineer!");
}

function promptIntern () {
    console.log("You've chosen Intern!");
}

function promptManager () {
    console.log("You've chosen Manager!");
}

module.exports = { promptEngineer, promptIntern, promptManager };