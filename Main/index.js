// this code include inquirer
const inquirer = require('inquirer');
// this code include class
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// 
const page-template.js = require('./src/page-template');
// code include File System
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
// output creates html
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
// this code Propmt manager details
const propmtManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team manager’s name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'employeeId',
            message: 'What is your team manager’s id?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your team manager’s email?', 
            validate: email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'officeNumber',
            message: 'What is your team manager’s office number?', 
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                }else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email,answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            
        }
    ])
}