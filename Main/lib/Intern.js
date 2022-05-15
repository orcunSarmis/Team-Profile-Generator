// This code includes Employee class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // This line calls parent constructor 
        super(name,id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return"Intern";
    }
}
// Exporting Intern class
module.exports = Intern;
