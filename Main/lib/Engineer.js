// This code includes Employee
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // This line calls parent constructor 
        super(name,id, email);

        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return"Engineer";
    }
}
// Exporting Engineer class
module.exports = Engineer;