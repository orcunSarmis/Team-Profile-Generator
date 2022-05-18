// this code include inquirer
const inquirer = require('inquirer');
// this code include class
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// 
const pageTemplate = require('./src/page-template');
// code include File System
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
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
            validate: answer => {
                if(answer !== "") {
                    return true;
                }             
                    return 'Please enter at least one character!';              
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
                    console.log('Please enter your engineer’s ID!');
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
                    console.log('Please enter manager’s email address!');
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
                    console.log('Please enter manager’s office number!');
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
            type: 'list',
            name: 'menu',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don’t want to add any more team members']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case "Engineer":
                propmtEngineer();
                break;
            case "Intern":
                propmtIntern();
                break;
            default:
                buildTeam();
        }
    });
};
// Questions for add an engineer
const propmtEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team engineer’s name?',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                }else {
                    console.log('Please enter engineer’s name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'employeeId',
            message: 'What is your team engineer’s id?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter your engineer’s ID!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your team engineer’s email?', 
            validate: email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter engineer’s email address!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'gitHub',
            message: 'What is your team engineer’s GitHub username?', 
            validate: gitHub => {
                if (gitHub) {
                    return true;
                }else {
                    console.log('Please enter engineer’s GitHub username!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHub);
        teamMembers.push(engineer);
        promptMenu();
    })
};
// Questions for add Intern
const propmtIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team intern’s name?',
            validate: internName => {
                if(internName) {
                    return true;
                }else {
                    console.log('Please enter intern’s name!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'employeeId',
            message: 'What is your team intern’s id?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter your intern’s ID!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your team intern’s email?', 
            validate: email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter intern’s email address!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'school',
            message: 'What is your team intern’s school name?', 
            validate: school => {
                if (school) {
                    return true;
                }else {
                    console.log('Please enter intern’s school name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};
// these code will build the team
const buildTeam = () => {
// add the output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, pageTemplate(teamMembers), "utf-8");
}

propmtManager();
