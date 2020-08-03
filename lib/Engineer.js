const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super(name, role, id, email)
        this.github = 'Github: ' + github
    }
    getGithub() {
        return this.gihthub;
    }
    getRole() {
        this.constructor.name;
    }

}

module.exports = Engineer;