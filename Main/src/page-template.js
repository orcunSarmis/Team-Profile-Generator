const generateTeam = (team) => {
    console.log(team);
    // this code creates empty array for push html elemnts
    const html = [];
    // Add functions for each team member return to HTML data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i>Manager</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}</a></span></li>
                    <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
                </ul>
        </div>
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${engineer.name} <br/>
            <i class="fas fa-glasses"></i>Engineer</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}</a></span></li>
                    <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
                </ul>
        </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${intern.name} <br/>
            <i class="fas fa-graduate"></i>Intern</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}</a></span></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
        </div>
        `;
        html.push(internHtml);
    }

    // for loop for team members
    for (let i = 0; i < team.lenght; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateManager(team[i]);
        }
    }
    // add html
    return html.join('');
}

// this code generate team page with export function.
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./Main/dist/style.css">
        <title>Team Profile Generator</title>
    </head>
<body>
    <header>
        <h1>Developer Team</h1>
    </header>

    <main>${generateTeam(team)}</main>
    <script src="./Main/index.js"></script>
    <script src="./Main/src/page-template.js"></script>
</body>
</html>
    `
};