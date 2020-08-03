const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, role, id, email, officeNumbner) {
        super(name, role, id, email)
        this.officeNumbner = officeNumbner;
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Manager;