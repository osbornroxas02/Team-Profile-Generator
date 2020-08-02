const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumbner) {
        super(name, id, email)
        this.officeNumbner = officeNumbner;
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Manager;