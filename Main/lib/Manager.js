// This code includes Employee
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // This line calls parent constructor 
        super(name,id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return"Manager";
    }
}
// Exporting Manager class
module.exports = Manager;
