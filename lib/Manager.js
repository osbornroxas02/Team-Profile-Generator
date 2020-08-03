const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Manager;